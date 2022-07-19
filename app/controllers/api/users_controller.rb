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
        data = update_params
        errors = check_update_params
        if errors.empty?
            @user = User.find(data[:id])
            if @user.update(fname: data[:fname], lname: data[:lname], city: data[:city], state: data[:state], about_me: data[:about_me])
                p data[:photo]
                @user.photo.attach(data[:photo]) if data[:photo] != "undefined"
                render :show, status: 200
            else
                render json: @user.errors.full_messages, status: 422
            end
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

    def update_params
        params.require(:user).permit(
            :id, :email, :profile_img, :created_at,
            :fname, :lname, :city, :state,
            :about_me, :errors, :photo
        )
    end

    def check_update_params
        errors = []
        error_params = JSON.parse(update_params[:errors])
        errors.push(error_params["name"]) if error_params["name"]
        errors.push(error_params["place"]) if error_params["place"]
        errors.push(error_params["photo"]) if error_params["photo"]
        errors
    end

end
