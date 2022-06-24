class Api::TrailsController < ApplicationController

    def show
    end

    def index
        @trails = Trail.all
        render :index, status: 200
    end
    
end
