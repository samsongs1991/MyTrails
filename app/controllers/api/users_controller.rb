class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            signin(@user)
            render :show
        else
            render json: check_params, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

    def email
        params[:user][:email]
    end

    def password
        params[:user][:password]
    end

    def check_params
        email_error = check_email
        password_error = check_password
        { email: email_error, password: password_error }
    end

    def check_email
        if email.nil?
            "Email required"
        elsif invalid_email?
            "Email is invalid"
        elsif email_taken?
            "Email already exists"
        end
    end

    def check_password
        if password.length < 6
            "Password must be at least 6 characters long"
        end
    end

    def invalid_email?
        !email.include?("@") || !email.include?(".")
    end

    def email_taken?
        !!User.find_by(email: email)
    end
    
end
