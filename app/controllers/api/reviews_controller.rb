class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show, status: 200
        end
    end

    def index
    end

    private

    def review_params
        params.require(:review).permit(:rating, :text, :user_id, :trail_id)
    end
    
end
