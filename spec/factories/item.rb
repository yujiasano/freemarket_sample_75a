FactoryBot.define do

  factory :user do
    nickname                    {"sasa"}
    email                       {"kkk@gmail.com"}
    password                    {"00000000"}
    encrypted_password          {"00000000"}
  end

  factory :category do
    name                        {"レディース"}
  end

  factory :item do
    name                        {"mai"}
    description                 {"かわいいです。"}
    price                       {4000}
    status                      {"新品、未使用"}
    size                        {""}
    trading_status              {"販売中"}
    delivery_area               {"北海道"}
    delivery_days               {"1~2日で発送"}
    delivery_burden             {"着払い（購入者負担）"}
    user_id                     {8}
    buyer_id                    {""}
    category_id                 {9}
    brand_id                    {""}
  end
end