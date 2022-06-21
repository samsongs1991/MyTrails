class Api::UsersController < ApplicationController
    # only for postman testing! - 6/20/22
    skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)
        
        if @user.save
            signin(@user)
            render :show, status: 200
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
        errors = [];
        
        email_error = check_email
        errors.push(email_error) unless email_error.nil?
        
        password_error = check_password
        errors.push(password_error) unless password_error.nil?
        
        errors
    end

    def check_email
        if email.nil? || email.length == 0
            "Email required"
        elsif invalid_email?
            "Email is invalid"
        elsif email_taken?
            "Email already exists"
        end
    end

    def check_password
        if password.nil? || password.length == 0
            "Password required"
        elsif password.length < 6
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
