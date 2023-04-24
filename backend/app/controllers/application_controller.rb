class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ApplicationHelper

    def index
        @products = Product.all
    end    

    def require_admin
        unless current_user && current_user.admin?
            render json: {error: 'You need Admin privileges'}, status:  :unauthorized       
        end    
    end
end
