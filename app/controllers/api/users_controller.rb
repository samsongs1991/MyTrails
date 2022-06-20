class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            # sign in the user
            # render the show view = pass to the client the user data
        else
            # render to the client errors about email / password 
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
    
end
