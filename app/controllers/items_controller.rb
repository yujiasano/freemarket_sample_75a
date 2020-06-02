class ItemsController < ApplicationController


  before_action :set_item, only: [:destroy, :show,:edit,:update]

 




  def index
    @items = Item.all
  end

  







































  

  def new
    @item = Item.new
    @images = @item.images.build
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to root_path
    else
      @item.images.build
      render action: :new
    end
  end



  def get_category_children
    @category_children = Category.find(params[:parent_id]).children
  end

  def get_category_grandchildren
    @category_grandchildren = Category.find(params[:child_id]).children
  end

  
  
  
  
  
  
  def edit
  end
  
  
  def update
    if @item.update(item_update_params)
      redirect_to root_path
    else
      render action: :edit
    end
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
    params.require(:item).permit(:name, :price, :description, :status, :size, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :brand_id, :category_id, :user_id, images_attributes: [:image])

  end

  
  def set_item
    # @item = Item.find(params[:id])
    @item = Item.includes(:images).find(params[:id])
  end

  def item_update_params
    params.require(:item).permit(:name, :price, :description, :status, :size, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :brand_id, :category_id, :user_id, [images_attributes: [:image, :_destroy, :id]])
  end
end

