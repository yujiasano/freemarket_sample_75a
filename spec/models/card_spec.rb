require 'rails_helper'

describe Card do
  describe '#create' do
    
    it "user_id、customer_id、card_idが存在すれば登録できること" do
      card = build(:card)
      expect(card).to be_valid
    end
  end
end