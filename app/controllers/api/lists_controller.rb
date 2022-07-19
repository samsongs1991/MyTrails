class Api::ListsController < ApplicationController

    def create
        p "= = = = = = = = = = = = = = = = = ="
        p "= = = = = = = = = = = = = = = = = ="
        p "CREATE action in LISTS CONTROLLER"

        @list = List.new(list_params)
        if @list.save
            render :show, status: 200
        else
            render json: @list.errors.full_messages, status: 402
        end

        p "= = = = = = = = = = = = = = = = = ="
        p "= = = = = = = = = = = = = = = = = ="
    end

    def index
        p "= = = = = = = = = = = = = = = = = ="
        p "= = = = = = = = = = = = = = = = = ="
        p "INDEX action in LISTS CONTROLLER"

        user = User.find(params[:user_id])
        if user.nil?
            render json: user.errors.full_messages, status: 404
        else
            @lists = user.lists
            render :index, status: 200
        end

        p "= = = = = = = = = = = = = = = = = ="
        p "= = = = = = = = = = = = = = = = = ="
    end

    private

    def list_params
        params.require(:list).permit(:name, :user_id)
    end

end
