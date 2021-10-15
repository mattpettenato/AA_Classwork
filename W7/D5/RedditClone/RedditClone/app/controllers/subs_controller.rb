class SubsController < ApplicationController

  before_action :require_logged_in, only: [:edit, :update]
  before_action :prohibit_non_mod, only: [:edit, :update]
  
  
  def prohibit_non_mod
    if !@current_user.subreddits
      redirect_to user_url
    end
  end

  def new
    @sub = Sub.new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)

    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash[:errors] = ["Invalid sub"]
      render :new
    end
  end

  def show
    @sub = Sub.find(params[:id])
    render :show
  end

  def index
    @subs = Sub.all
    render :index
  end

  def edit
    @sub = Sub.find(params[:id])
    render :edit
  end

  def update
    @sub = Sub.find(params[:id])
    if !@sub.update(sub_params)
      flash[:errors] = @sub.errors.full_messages
    end
    redirect_to sub_url(@sub)
  end

  def destroy
    @sub = Sub.find(params[:id])
    @sub.destroy
    redirect_to subs_url
  end

  def sub_params
    params.require(:sub).permit(:sub, :description, :mod_id)
  end
end
