require 'rails_helper'

describe Profile do
  describe '#create' do
    
    it "全部が存在すれば登録できること" do
      profile = build(:profile)
      expect(profile).to be_valid
    end

    
    it "family_nameがない場合は登録できないこと" do
      profile = build(:profile, family_name: nil)
      profile.valid?
      expect(profile.errors[:family_name])
    end

    it "first_nameがない場合は登録できないこと" do
      profile = build(:profile, first_name: nil)
      profile.valid?
      expect(profile.errors[:first_name])
    end

    it "family_name_kanaがない場合は登録できないこと" do
      profile = build(:profile, family_name_kana: nil)
      profile.valid?
      expect(profile.errors[:family_name_kana])
    end

    it "first_name_kanaがない場合は登録できないこと" do
      profile = build(:profile, first_name_kana: nil)
      profile.valid?
      expect(profile.errors[:first_name_kana])
    end

    it "phone_numberがない場合は登録できないこと" do
      profile = build(:profile, phone_number: nil)
      profile.valid?
      expect(profile.errors[:phone_number])
    end
  
    it "birthdayがない場合は登録できないこと" do
      profile = build(:profile, birthday: nil)
      profile.valid?
      expect(profile.errors[:birthday])
    end 
  end
end