class CommentsController < ApplicationController
  before_action :set_comment, only: [:update,:destroy,:restore]
  before_action :check_user, only: [:update,:destroy,:restore]

  def create
    @comment = Comment.new(comment_params)
    @seller_of_item = @comment.item.user_id
    if @comment.save
      respond_to do |format|
        format.json
      end
    else
      flash[:alert] = "保存できていません"
      redirect_to item_path(params[:id])
    end
  end

  # 仮削除用の記述
  def update
    unless @comment.update(delete_check:1)
      flash[:alert] = "削除できていません"
      redirect_to item_path(params[:id])
    end
  end

  # 仮削除復元の記述
  def restore
    @seller_of_item = @comment.item.user_id
    if @comment.update(delete_check:0)
    respond_to do |format|
      format.json
    end
    else
      flash[:alert] = "更新できていません"
      redirect_to item_path(params[:id])
    end
  end

  # コメントを完全に削除する記述
  def destroy
    unless @comment.destroy
      flash[:alert] = "完全に削除できていません"
      redirect_to item_path(params[:id])
    end
  end



private
  def comment_params
    params.require(:comment).permit(:comment,:item_id).merge(user_id: current_user.id)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def check_user
    unless @comment.item.user_id == current_user.id
      flash[:alert] = "その操作はできません"
      redirect_to root_path
    end
  end

end
