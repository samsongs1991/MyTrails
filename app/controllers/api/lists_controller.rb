class Api::ListsController < ApplicationController
    # only for postman testing! - 7/19/22
    skip_before_action :verify_authenticity_token

    def create
        @list = List.new(list_params)
        if @list.save
            render :show, status: 200
        else
            render json: @list.errors.full_messages, status: 402
        end
    end

    def index
        user = User.find(params[:user_id])
        if user.nil?
            render json: user.errors.full_messages, status: 404
        else
            @lists = user.lists
            render :index, status: 200
        end
    end

    def update
        data = update_params
        @list = List.find(data[:id])
        if @list.update(name: data[:name])
            @list.photo.attach(data[:photo]) if data[:photo] != "undefined"
            render :show, status: 200
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        list = List.find(params[:id])
        if list.destroy
            render json: params[:id], status: 200
        else
            render json: list.errors.full_messages, status: 404
        end
    end

    private

    def list_params
        params.require(:list).permit(:name, :user_id)
    end

    def update_params
        params.require(:list).permit(:id, :name, :user_id, :photo)
    end

end
