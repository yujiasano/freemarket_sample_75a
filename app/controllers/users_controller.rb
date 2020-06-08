class UsersController < ApplicationController
  before_action :move_to_index, only: [:show]

  def show
    
  end
  
  private

    def move_to_index
      redirect_to new_user_session_path unless user_signed_in?
    end
end
