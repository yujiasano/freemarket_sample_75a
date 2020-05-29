class Item < ApplicationRecord

  has_many :images
  # belongs_to :user, optional: true
  belongs_to :brand, optional: true
  belongs_to :category, optional: true
  accepts_nested_attributes_for :images, allow_destroy: true

  validates :name, :description, :price, :status, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :category_id, presence: true

end
