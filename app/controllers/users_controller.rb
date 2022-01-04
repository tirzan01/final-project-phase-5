class UsersController < ApplicationController
  def index
    users = User.all.limit(20)

    render json: users
  end

  def show
    user = User.find(params[:id])

    render json: user
  end

  def create
    p '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'
    p params
  end
end
