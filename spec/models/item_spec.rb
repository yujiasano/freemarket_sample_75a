require 'rails_helper'

describe Item do
  describe '#create' do

    it "必須項目がすべて存在すれば登録できること" do
      item = build(:item)
      expect(item).to be_valid
    end

    it "商品名がない場合は登録できないこと" do
      item = build(:item, name: "")
      item.valid?
      expect(item.errors[:name])
    end
    it "商品名が40字の場合は出品できる" do
      # irbで`puts "a" * 40`を出力して40字の文字列を生成
      item = build(:item, name: "a * 40")
      item.valid?
      expect(item).to be_valid
    end
    it "商品名が40字以上の場合は出品できない" do
      # irbで`puts "a" * 40`を出力して40字の文字列を生成
      item = build(:item, name: "a * 41")
      item.valid?
      expect(item.errors[:name][0])
    end

    it "商品説明がない場合は登録できないこと" do
      item = build(:item, description: "")
      item.valid?
      expect(item.errors[:description])
    end
    it "商品説明が1000文字を越えている場合は出品できない" do
      # irbで`puts "a" * 1000`を出力して1000字の文字列を生成
      item = build(:item, description: "a * 1001")
      item.valid?
      expect(item.errors[:description][0])
    end
  

    it "priceがない場合は登録できないこと" do
      item = build(:item, price: "")
      item.valid?
      expect(item.errors[:price])
    end
    it "価格が300円の場合は出品できる" do
      item = build(:item, price: "300")
      item.valid?
      expect(item).to be_valid
    end
    it "価格が300円未満では出品できない" do
      item = build(:item, price: "299")
      item.valid?
      expect(item.errors[:price])
    end
    it "価格が9,999,999円の場合は出品できる" do
      item = build(:item, price: "9999999")
      item.valid?
      expect(item).to be_valid
    end
    it "価格が9,999,999円より高い場合は出品できない" do
      item = build(:item, price: "10000000")
      item.valid?
      expect(item.errors[:price])
    end

    it "商品の状態がない場合は登録できないこと" do
      item = build(:item, status: "")
      item.valid?
      expect(item.errors[:status])
    end

    it "取引状況がない場合は登録できないこと" do
      item = build(:item, trading_status: "")
      item.valid?
      expect(item.errors[:trading_status])
    end

    it "発送元がない場合は登録できないこと" do
      item = build(:item, delivery_area: "")
      item.valid?
      expect(item.errors[:delivery_area])
    end

    it "発送までの日数がない場合は登録できないこと" do
      item = build(:item, delivery_days: "")
      item.valid?
      expect(item.errors[:delivery_days])
    end

    it "送料負担の選択がない場合は登録できないこと" do
      item = build(:item, delivery_burden: "")
      item.valid?
      expect(item.errors[:delivery_burden])
    end

    it "category_idがない場合は登録できないこと" do
      item = build(:item, category_id: "")
      item.valid?
      expect(item.errors[:category_id])
    end

  end
end