class UsersController < ApplicationController

  def new
    # @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save

    else
      
    end
  end

  def show

  end

  def index

  end

  def update

  end

  def edit

  end

  def destroy

  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
