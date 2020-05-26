class ItemsController < ApplicationController
  def index
  end

  def new
  end

  def edit
  end

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  def destroy
  end

  def show

  end

  private

  def product_params
    params.require(:item).permit(:name, :price, images_attributes: [:src])
  end
end
