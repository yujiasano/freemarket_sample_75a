class PurchasesController < ApplicationController
  before_action :set_item, only: [:index, :pay, :done]

  require 'payjp'

  def index
    @address = Address.where(user_id: current_user.id).first
    @profile = Profile.find(current_user.id)
    card = Card.where(user_id: current_user.id).first
  
    #Cardテーブルは前回記事で作成、テーブルからpayjpの顧客IDを検索
    if card.blank?
      #登録された情報がない場合にカード登録画面に移動
      redirect_to controller: "card", action: "new"
    else
      Payjp.api_key = Rails.application.credentials.payjp[:PAYJP_PRIVATE_KEY]
      #保管した顧客IDでpayjpから情報取得
      customer = Payjp::Customer.retrieve(card.customer_id)
      #保管したカードIDでpayjpから情報取得、カード情報表示のためインスタンス変数に代入
      @default_card_information = customer.cards.retrieve(card.card_id)
    end
  end

  def pay
    if @item.update(buyer_id: current_user.id, trading_status: "売り切れ")
      card = Card.where(user_id: current_user.id).first
      Payjp.api_key = Rails.application.credentials.payjp[:PAYJP_PRIVATE_KEY]
      Payjp::Charge.create(
      amount: @item.price,
      customer: card.customer_id, #顧客ID
      currency: 'jpy', #日本円
      )
      redirect_to action: 'done' #完了画面に移動
    else
      redirect_to action: 'index' #再度購入画面へ
    end
  end

  def done
    card = Card.find_by(user_id: current_user.id)
    customer = Payjp::Customer.retrieve(card.customer_id)
    @default_card_information = customer.cards.retrieve(card.card_id)
  end

  private
    def set_item
      @item = Item.find(params[:item_id])
    end
end

