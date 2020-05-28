class ItemsController < ApplicationController
  def index
  end

  def new
  end

  def edit
  end

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  def destroy
    # if item.user_id == current_user.id
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to root_path
    # end
  end

  def show
    @item = Item.find(params[:id])
  end

  private

  def product_params
    params.require(:item).permit(:name, :price, images_attributes: [:src])
  end
  
end
