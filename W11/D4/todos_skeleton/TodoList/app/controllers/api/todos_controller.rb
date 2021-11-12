class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end
    
  # refactor to fetch all todos
  def index
    render json: Todo.all
  end
  
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  # refactor to change todo
  def update
    render json: Todo.find(params[:id]);
  end

  def destroy
    render json: Todo.all
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done);
  end
end
