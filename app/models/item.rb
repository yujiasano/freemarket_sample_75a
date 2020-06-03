class Item < ApplicationRecord

  has_many :images
  # belongs_to :user, optional: true
  belongs_to :brand, optional: true
  belongs_to :category, optional: true
  accepts_nested_attributes_for :images, allow_destroy: true

  validates :name, :description, :price, :status, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :category_id, presence: true

  enum status:{
    新品、未使用:"新品、未使用",目立った傷や汚れなし:"目立った傷や汚れなし",目立った傷や汚れあり:"目立った傷や汚れあり",全体的に状態が悪い:"全体的に状態が悪い"
  }

  enum delivery_burden:{
    送料込み（出品者負担）:"送料込み（出品者負担）",着払い（購入者負担）:"着払い（購入者負担）"
  }

  enum delivery_days:{
    "1~2日で発送":"1~2日で発送","2~3日で発送":"2~3日で発送", "4~7日で発送":"4~7日で発送"
  }

end
