class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  # skip_before_action :current_user, :logged_in?
  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout
    current_user.reset_session_token! #coming from helper method
    session[:session_token] = nil
    @current_user = nil
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
    #if current_user
    #return true
    #else 
    #return false
  end
end
