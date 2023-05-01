class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ApplicationHelper
    require 'jwt'

    def index
        @products = Product.all
    end    

    # def require_admin
    #   token = request.headers["Authorization"]&.split&.last
    #   decoded_token = JWT.decode(token, 'my_secret_key', true, { algorithm: 'HS256' })
    #   is_admin = decoded_token.first['is_admin']
    #   unless is_admin
    #     render json: { error: "You need Admin privileges" }, status: :unauthorized
    #   end
    # end

    def require_admin
      token = request.headers["Authorization"]&.split&.last
      if token.nil? || !valid_token?(token) || !admin_token?(token)
        render json: { error: "You need Admin privileges" }, status: 401
      end
    end
    
    def valid_token?(token)
      begin
        JWT.decode(token, 'my_secret_key')
        true
      rescue JWT::DecodeError
        false
      end
    end
    
    def admin_token?(token)
      decoded_token = JWT.decode(token, 'my_secret_key', true, algorithm: 'HS256')
      decoded_token.first['is_admin']
    end
    
    
end
