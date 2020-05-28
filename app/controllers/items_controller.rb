class ItemsController < ApplicationController
  def index
  end













































  

  def new
    @item = Item.new
    @item_image = @item.images.build
  end
  
  def create
    @item = Item.new(item_params)


    if @item.save
      render :create
    else
      render :new
    end
  end
  
  
  
  def edit
  end
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  def destroy
  end

  def show

  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :description, :status, :size, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :brand_id, :category_id, images_attributes: [:src])
  end
end
