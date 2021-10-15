class PostsController < ApplicationController
  before_action :require_logged_in, only: [:edit, :update]
  before_action :prohibit_non_author, only: [:edit, :update]

  def prohibit_non_author
    if !@current_user.posts.where("posts.id = ?", params[:id])
      redirect_to users_url
    end
  end
  
  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def update
    @post = Post.find(params[:id])
    if !@post.update(post_params)
      flash[:errors] = @post.errors.full_messages
    end
    redirect_to post_url(@post)
  end

  def edit
    @post = Post.find(params[:id])
    render :edit
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_url
  end

  def post_params
    params.require(:post).permit(
      :title, 
      :url, 
      :content, 
      :author_id, 
      :subreddit_id
    )
  end
end
