class ItemsController < ApplicationController
  before_action :set_item, only: [:destroy, :show]

  def index
    @items = Item.all
  end

  







































  

  def new
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

  def product_params
    params.require(:item).permit(:name, :price, images_attributes: [:src])
  end
  

  def set_item
    @item = Item.find(params[:id])
  end

end

