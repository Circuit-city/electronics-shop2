class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  # before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    users = User.all

    render json: users
  end

  def create
    allowed_roles = ['admin', 'user']
    valid_role = user_params[:role]
    if valid_role.present? && !allowed_roles.include?(valid_role)
      render json: { errors: ['Invalid role specified'] }, status: :unprocessable_entity  
      return
    end

    begin
      user = User.new(user_params)
      role = user_params[:role]
      if role.present? && allowed_roles.include?(role)
        if user_params[:role] == 'admin'
          user.role = true
        elsif user_params[:role] == 'user'
          user.role = false
        end
      end
      user.password = params[:password]
      user.password_confirmation = params[:password_confirmation]
      user.save!

      session[:user_id] = user.id
      render json: { status: :created, message: "User successfully registered", user: user }
    rescue ActiveRecord::RecordInvalid => e
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    rescue ActiveRecord::RecordNotUnique => e
      render json: { errors: [e.message] }, status: :unprocessable_entity
    end
  end

  # GET /users/1
  def show
    render json: @user
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
    end
end

