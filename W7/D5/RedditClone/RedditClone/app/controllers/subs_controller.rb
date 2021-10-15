class SubsController < ApplicationController
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
  end

  def index
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def sub_params
    params.require(:sub).permit(:sub, :description, :mod_id)
  end
end
