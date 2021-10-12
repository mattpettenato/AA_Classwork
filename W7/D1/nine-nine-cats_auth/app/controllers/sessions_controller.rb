class SessionsController < ApplicationController
  
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      redirect_to cats_url
    else
      #render json: ["Invalid Username or Password"]
      #reset session token
      flash.now.alert = "Invalid Username or Password"
      redirect_to new_user_url
    end
    # session_token = User.reset_session_token!
    # session[:session_token] = session_token
  end


  # def destroy

  # end

  
end