class Api::V1::DaysController < ApplicationController
  before_action :set_day, only: %i[ show update destroy ]

  # GET /fodays
  def index
      if params[:user_id]
        @days = Day.select_by_user(params[:user_id])
      else
        @days = Day.select_sort(params[:sort], User.find(session[:user_id]))
      end
    full_days = @days.map{ |day| day.json_to_render(session[:user_id]) }

    render json: full_days
  end

  # GET /days/1
  def show
    full_day = @day.json_to_render(session[:user_id])

    render json: full_day
  end

  # POST /days
  def create
    @day = Day.create_from_params(day_params)

    unless @day && @day.valid?
      render json: @day.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /days/1
  def update
    if @day.update(day_params)
      render json: @day
    else
      render json: @day.errors, status: :unprocessable_entity
    end
  end

  # DELETE /days/1
  def destroy
    @day.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_day
      @day = Day.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def day_params
      params.require(:day).permit(:user_id, :name, :day_foods => [:time, :foods => [:foodName, :foodId, :qty]])
    end
end

