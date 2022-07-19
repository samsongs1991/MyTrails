class Api::ListsController < ApplicationController

    def create
        p "= = = = = = = = = = = = = = = = = ="
        p "= = = = = = = = = = = = = = = = = ="
        p "CREATE action in LISTS CONTROLLER"
        p "= = = = = = = = = = = = = = = = = ="
        p "= = = = = = = = = = = = = = = = = ="
    end

    def index
        p "= = = = = = = = = = = = = = = = = ="
        p "= = = = = = = = = = = = = = = = = ="
        p "INDEX action in LISTS CONTROLLER"
        p "= = = = = = = = = = = = = = = = = ="
        p "= = = = = = = = = = = = = = = = = ="
    end

    private

    def list_params
        params.require(:list).permit(:name, :user_id)
    end

end
