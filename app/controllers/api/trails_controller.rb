class Api::TrailsController < ApplicationController

    def show
        @trail = Trail.includes(:reviews).find(params[:id])
        render :show, status:200
    end

    def index
        @trails = Trail.includes(:reviews).all
        render :index, status: 200
    end

end
