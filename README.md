# freemarket_sample_75a
　TECH CAMPでチームで開発したフリーマーケットアプリです。
 
# DEMO
 ![](https://github.com/yujiasano/freemarket_sample_75a/blob/master/6163efc6071fb4a7a9aa4950abbe782b.gif)
 

# App URL

 http://18.181.47.13/  
 Basic認証をかけています。ご覧の際は以下のIDとPassを入力してください。    
  ID: mercari  
  Pass: nagoya75
  
# features
- ウィザード形式でのユーザー登録機能/ログイン機能
- SNS認証による新規登録、ログイン機能（ローカル環境のみ）
- 商品の出品、編集、削除機能
- 商品の購入機能（pay.jp）
- カテゴリー機能

# ER図
![](https://i.gyazo.com/857a88c2097115a437d3c7317f4139a1.png)


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :items
- has_many :comments
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
- has_many :comments


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

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|comment|string||
|delete_check|integer|default: 0|
|item|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belings_to :user
- belings_to :iten
