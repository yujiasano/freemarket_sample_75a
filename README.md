# freemarket_sample_75a
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :items
- has_one :profile
- has_one :creditcard

## profilesテーブル
|Column|Type|Options|
|------|----|-------|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|introduction|text||
|icon|string||
|phone_number|integer|null: false|
|birthday|integer|null: false|
|user|references|null: false|

### Association
- belongs_to :user

## addressesテーブル
|Column|Type|Options|
|------|----|-------|
|postal_code|integer|null: false|
|prefecture|string|null: false|
|municipalities|string|null: false|
|address|string|null: false|
|apartment|string||
|user|references|null: false

### Association
- belongs_to :user

## creditcardテーブル
|Column|Type|Options|
|------|----|-------|
|card_id|integer|null: false|
|customer_id|integer|null: false|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :user

## itemsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|description|text|null: false|
|price|integer|null: false|
|status|string|null: false|
|size|string||
|trading_status|string|null: false|
|delivery_area|string|null: false|
|delivery_days|string|null: false|
|delivery_burden|string|null: false|
|user|references|null: false, foreign_key: true|
|brand|references|null: false, foreign_key: true|
|category|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :categoty
- belongs_to :brand


## imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|item|references|null: false|

### Association
- belongs_to :item

## categoryテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|


### Association
- has_many :items

## brandテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|


### Association
- has_many :items
