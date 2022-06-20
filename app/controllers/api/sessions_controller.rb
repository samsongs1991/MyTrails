class Api::SessionsController < ApplicationController

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
            render json: { signout: "Already signed out" }, status: 404
        end
    end
    
end
