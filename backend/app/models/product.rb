class Product < ApplicationRecord
  belongs_to :category
  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }


  def product_image_url
    image.attached? ? url_for(image) : nil
  end

end
