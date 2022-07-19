class List < ApplicationRecord
    validates :name, presence: true
    validates :user_id, presence: true

    belongs_to :user
    has_many :trails
end
