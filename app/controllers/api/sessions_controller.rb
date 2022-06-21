class Api::SessionsController < ApplicationController
    # only for postman testing! - 6/20/22
    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            signin(@user)
            render "/api/users/show", status: 200
        else
            render json: { signin: "Login failed" }, status: 401
        end
    end

    def destroy
        if current_user
            signout
            render json: {}, status: 200
        else
            render json: ["Already signed out"], status: 404
        end
    end
    
end
