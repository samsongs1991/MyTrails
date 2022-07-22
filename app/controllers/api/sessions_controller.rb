class Api::SessionsController < ApplicationController

    def create
        @user = User.with_attached_photo.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            signin(@user)
            render "/api/users/show", status: 200
        else
            render json: ["Login failed" ], status: 401
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
