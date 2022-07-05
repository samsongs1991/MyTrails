class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show, status: 200
        end
    end

    def index
        if(params[:trail_id])
            @reviews = Trail.find(params[:trail_id]).reviews
        elsif(params[:user_id])
            @reviews = User.find(params[:user_id]).reviews
        end

        if(@reviews) 
            render :index, status: 200
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :text, :user_id, :trail_id)
    end
    
end
