class Api::ListsTrailsController < ApplicationController
    # only for postman testing! - 7/21/22
    skip_before_action :verify_authenticity_token

    def create
        @lists_trail = ListsTrail.new(lists_trail_params)
        if @lists_trail.save
            render :show, status: 200
        else
            render json: @lists_trail.errors.full_messages, status: 402
        end
    end

    def destroy
        @lists_trail = ListsTrail.find(params[:id])
        if @lists_trail
            @lists_trail.delete
            render json: @lists_trail.id, status: 200
        else
            render json: @lists_trail.errors.full_messages, status: 404
        end
    end

    private

    def lists_trail_params
        params.require(:lists_trail).permit(:list_id, :trail_id)
    end

end
