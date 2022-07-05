class Api::TrailsController < ApplicationController

    def show
        p "==================================="
        p "==================================="
        p ENV['WEATHER_API_KEY']
        p "==================================="
        p "==================================="
        @trail = Trail.find(params[:id])
        render :show, status:200
    end
    
    def index
        @trails = Trail.all
        render :index, status: 200
    end
    
end
