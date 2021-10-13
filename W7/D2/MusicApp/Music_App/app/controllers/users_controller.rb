class UsersController < ApplicationController
  def show
    render :show
  end
  
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save #runs user.save. If true, then:
      login_user!(@user)
      redirect_to user_url(@user)
    else
      # render json: user.errors.full_messages, status: 422 #422: unprocessable entity
      flash.now[:errors] = @user.errors.full_messages
      # flash[:errors] = @user.errors.full_messages 
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end