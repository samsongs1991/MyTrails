class Api::TrailsController < ApplicationController

    def show
        @trail = Trail.find(params[:id])
        render :show, status:200
    end

    def index
        @trails = Trail.all
        render :index, status: 200
    end
    
end
