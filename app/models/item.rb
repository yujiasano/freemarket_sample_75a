class Item < ApplicationRecord

  has_many :images
  belongs_to :user
  belongs_to :categoty
  belongs_to :brand
  accepts_nested_attributes_for :images, allow_destroy: true

  validates :name, :description, :price, :status, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :category_id, presence: true

end
