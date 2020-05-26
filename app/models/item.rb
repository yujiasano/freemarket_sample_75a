class Item < ApplicationRecord

  has_many :images
  belongs_to :user
  belongs_to :categoty
  belongs_to :brand
end
