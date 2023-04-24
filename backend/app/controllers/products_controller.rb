class ProductsController < ApplicationController
  before_action :current_user
  before_action :require_admin, only: [ :create, :update, :destroy]
  before_action :set_product, only: %i[ show update destroy ]

  # GET /products
  def index
    products = Product.all

    render json: products
  end

  # GET /products/1
  def show
    product = Product.find(params[:id])
    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created
    else
      render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:name, :description, :category_id, :price, :image)
    end
end
