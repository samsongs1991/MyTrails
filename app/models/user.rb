class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :reviews

    attr_reader :password
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user.nil?
            return nil
        else
            user.is_password?(password) ? user : nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = generate_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        unless self.session_token
            self.session_token = generate_session_token
        end
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end
    
end
