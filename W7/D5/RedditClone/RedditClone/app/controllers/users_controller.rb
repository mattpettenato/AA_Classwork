class UsersController < ApplicationController
  # before_action :require_logged_in, only: []

  def new
    # @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to user_url(@user)
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def update
    @user = User.find(params[:id])
    if !@user.update(user_params)
      flash[:errors] = @user.errors.full_messages
    end
    redirect_to user_url(@user)
  end

  def edit
    @user = User.find(params[:id])
    render :edit
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_url
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
