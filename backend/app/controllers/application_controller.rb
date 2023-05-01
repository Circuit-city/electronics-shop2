class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ApplicationHelper
    require 'jwt'

    def index
        @products = Product.all
    end    

    # def require_admin
    #     if current_user && current_user.admin?
    #       payload = {user_id: current_user.id, admin: true}
    #       jwt_token = JWT.encode(payload, Rails.application.secrets.secret_key_base)
    #       render json: {jwt: jwt_token}
    #     else
    #       render json: {error: 'You need Admin privileges'}, status:  :unauthorized       
    #      end         
    # end

    def require_admin
      token = request.headers["Authorization"]&.split&.last
      decoded_token = JWT.decode(token, 'my_secret_key', true, { algorithm: 'HS256' })
      is_admin = decoded_token.first['is_admin']
      unless is_admin
        render json: { error: "You need Admin privileges" }, status: :unauthorized
      end
    end
    
end
