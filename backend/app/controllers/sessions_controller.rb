require 'jwt'

class SessionsController < ApplicationController
  # def create
  #   user = User.find_by(email: params[:email])
  #   if user&.authenticate(params[:password])
  #     secret_key = user.role ? 'admin_secret_key' : 'user_secret_key'
  #     token = JWT.encode({ user_id: user.id }, secret_key)
  #     render json: { user: user, token: token }, status: :created
  #   else
  #     render json: { error: "Invalid email or password" }, status: 401
  #   end
  # end


  # def create
  #   user = User.find_by(email: params[:email])
  #   if user&.authenticate(params[:password])
  #     secret_key = 'my_secret_key'
  #     payload = { user_id: user.id, is_admin: user.role }
  #     token = JWT.encode(payload, secret_key)
  #     render json: { user: user, token: token }, status: :created
  #   else
  #     render json: { error: "Invalid email or password" }, status: 401
  #   end
  # end

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      secret_key = 'my_secret_key'
      payload = { user_id: user.id, is_admin: user.role }
      token = JWT.encode(payload, secret_key)
      render json: { user: user, token: token }, status: :created
    else
      render json: { error: "Invalid email or password" }, status: 401
    end
  end
  
  


    # handle logout
    def destroy
        if session.present?
            session.delete(:user_id)
            head :no_content
        end
    end
end