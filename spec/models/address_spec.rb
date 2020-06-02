require 'rails_helper'

describe Address do
  describe '#create' do
    
    it "全部が存在すれば登録できること" do
      address = build(:address)
      expect(address).to be_valid
    end

    
    it " postal_codeがない場合は登録できないこと" do
      address = build(:address, postal_code: nil)
      address.valid?
      expect(address.errors[:postal_code])
    end

    it " prefectureがない場合は登録できないこと" do
      address = build(:address, prefecture: nil)
      address.valid?
      expect(address.errors[:prefecture])
    end

    it " municipalitiesがない場合は登録できないこと" do
      address = build(:address, municipalities: nil)
      address.valid?
      expect(address.errors[:municipalities])
    end

    it " addressがない場合は登録できないこと" do
      address = build(:address, address: nil)
      address.valid?
      expect(address.errors[:address])
    end
  end
end