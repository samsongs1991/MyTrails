class Api::TrailsController < ApplicationController

    def show
        @trail = Trail.includes(:reviews, photo_attachment: :blob).find(params[:id])
        render :show, status:200
    end

    def index
        @trails = Trail.includes(:reviews, photo_attachment: :blob).all
        render :index, status: 200
    end

end
