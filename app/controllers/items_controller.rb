class ItemsController < ApplicationController
  before_action :set_item, only: [:destroy, :show]

  def index
  end

  def new
  end

  def edit
  end

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  def destroy
    @item.destroy
    redirect_to root_path
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
