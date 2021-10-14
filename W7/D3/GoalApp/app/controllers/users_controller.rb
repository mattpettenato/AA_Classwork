class UsersController < ApplicationController
  def index
    @users = Users.all
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to users_url
    else
      flash.now[:errors] = user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
