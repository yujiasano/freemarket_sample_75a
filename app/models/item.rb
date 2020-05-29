class Item < ApplicationRecord

  has_many :images
  # belongs_to :user, optional: true
  belongs_to :brand, optional: true
  belongs_to :category, optional: true
  accepts_nested_attributes_for :images, allow_destroy: true

  validates :name, :description, :price, :status, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :category_id, presence: true

  enum status:{
    新品、未使用:0,目立った傷や汚れなし:1,目立った傷や汚れあり:2,全体的に状態が悪い:3
  }

  enum delivery_burden:{
    送料込み（出品者負担）:0,着払い（購入者負担）:1
  }

  enum delivery_days:{
    "1~2日で発送":0,"2~3日で発送":1,"4~7日で発送":2
  }

end
