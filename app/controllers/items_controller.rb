class ItemsController < ApplicationController
  before_action :set_item, only: [:destroy, :show]

  def index
    @items = Item.all
  end

  







































  

  def new
    @item = Item.new
    @item.images.build()
  end
  
  def create
    @item = Item.new(item_params)
    respond_to do |format|
      # 商品の詳細が保存された場合
      if @item.save
        params[:item_images][:image].each do |image|
          @item.images.create(image: image, item_id: @item.id)
        end
        format.html{redirect_to root_path}
      else
        # 商品の詳細が保存されなかった場合
        @item.images.build
        format.html{render action: 'new'}
      end
    end
  end
  
  
  
  
  
  def edit
  
  end
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  def destroy
    if @item.destroy
        redirect_to root_path
    else
        render action: :show
    end
  end

  def show
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :description, :status, :size, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :brand_id, :category_id, images_attributes: [:image])
  end
  

  def set_item
    @item = Item.find(params[:id])
  end

end

