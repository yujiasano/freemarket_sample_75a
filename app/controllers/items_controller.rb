class ItemsController < ApplicationController
  before_action :move_to_index, only: [:new, :edit, :update]
  before_action :set_item, only: [:destroy, :show,:edit,:update]

  def index
    @items = Item.where(status: 0).includes(:images).order('id DESC').limit(4)
    @items = Item.where(status: 0).includes(:images).order('id DESC').limit(4)
    @ladies = Item.where(category_id: 1..199, status: 0).order('id DESC').limit(4)
    @mens = Item.where(category_id: 200..345, status: 0).order('id DESC').limit(4)
    @kids = Item.where(category_id: 346..1033, status: 0).order('id DESC').limit(4)
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
    @category = @item.category

    @comment = Comment.new
    @commentALL = @item.comments
  end


  def favorites
    @items = current_user.favorite_items.includes(:user).recent
  end




  private

  def item_params
    params.require(:item).permit(:name, :price, :description, :status, :size, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :brand_id, :category_id, :user_id, images_attributes: [:image])

  end

  
  def set_item
    @item = Item.includes(:images).find(params[:id])
  end

  def item_update_params
    params.require(:item).permit(:name, :price, :description, :status, :size, :trading_status, :delivery_area, :delivery_days, :delivery_burden, :brand_id, :category_id, :user_id, [images_attributes: [:image, :_destroy, :id]])
  end

  def move_to_index
    redirect_to new_user_session_path unless user_signed_in?
  end
end

