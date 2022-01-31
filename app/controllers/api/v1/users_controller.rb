class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.query(params[:q])

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user.render(session[:user_id])
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.valid? && @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # POST users/1/follow
  def follow
    followed = User.find(params[:user_id])
    follower = User.find(session[:user_id])

    followed.users << follower

    render status: :unprocessable_entity unless followed.users.include?(follower)
  end

  # POST users/1/unfollow
  def unfollow
    followed = User.find(params[:user_id])
    follower = User.find(session[:user_id])

    followed.users.delete(follower)

    render status: :unprocessable_entity if followed.users.include?(follower)
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.fetch(:user).permit(:user_name, :first_name, :last_name, :bio, :email, :password, :password_confirmation, :sex, :dob, :height, :curr_weight, :goal_weight, :bg_img, :profile_img)
    end
end
