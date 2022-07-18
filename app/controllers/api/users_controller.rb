class Api::UsersController < ApplicationController
    # only for postman testing! - 6/20/22
    skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)
        errors = check_create_params

        if errors.empty? && @user.save
            signin(@user)
            render :show, status: 200
        else
            render json: errors, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        errors = check_update_params
        if errors.empty? && @user.update(
            fname: params[:user][:fname],
            lname: params[:user][:lname],
            city: params[:user][:city],
            state: params[:user][:state],
            about_me: params[:user][:about_me]
        )
            render :show, status: 200
        else
            render json: errors, status: 422
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

    def check_create_params
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

    def check_update_params
        errors = []
        if params[:user][:errors]
            errors.push(params[:user][:errors][:name]) if params[:user][:errors][:name]
            errors.push(params[:user][:errors][:place]) if params[:user][:errors][:place]
        end
        errors
    end

end
