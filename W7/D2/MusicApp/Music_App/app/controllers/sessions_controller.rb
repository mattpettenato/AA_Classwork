class SessionsController < ApplicationController
  def new
    render :new
  end

  def create # rubocop:disable Metrics/AbcSize
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user.nil?
      flash.now[:errors] = ['Invalid credentials.']
      render :new
    elsif !user.activated?
      flash.now[:errors] = ['You must activate your account first! Check your email.']
      render :new
    else
      login_user!(user)
      redirect_to root_url
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil

    redirect_to new_session_url
  end


end