class Order < ApplicationRecord
  belongs_to :user
  has_many :OrderItem
end
