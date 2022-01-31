class Api::V1::LikesController < ApplicationController
  before_action :set_like, only: %i[ show update destroy ]

  # GET /likes
  def index
    @likes = Like.all

    render json: @likes
  end

  # GET /likes/1
  def show
    render json: @like
  end

  # POST /likes
  def create
    @like = Like.create(like_params)

    @like.user_id = session[:user_id] unless @like.user_id == session[:user_id]

    @like.save if @like.valid?
  end

  # PATCH/PUT /likes/1
  def update
    if @like.update(like_params)
      render json: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /likes/1
  def dislike
    like = Like.where(
      'day_id = ? AND user_id = ?',
      like_params[:day_id],
      like_params[:user_id]
    ).first

    like.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_like
      @like = Like.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def like_params
      params.require(:like).permit(:user_id, :day_id)
    end
end
