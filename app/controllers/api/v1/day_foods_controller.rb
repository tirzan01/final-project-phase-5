class Api::V1::DayFoodsController < ApplicationController
  before_action :set_day_food, only: %i[ show update destroy ]

  # GET /day_foods
  def index
    @day_foods = DayFood.all

    render json: @day_foods
  end

  # GET /day_foods/1
  def show
    render json: @day_food
  end

  # POST /day_foods
  def create
    @day_food = DayFood.new(day_food_params)

    if @day_food.save
      render json: @day_food, status: :created, location: @day_food
    else
      render json: @day_food.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /day_foods/1
  def update
    if @day_food.update(day_food_params)
      render json: @day_food
    else
      render json: @day_food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /day_foods/1
  def destroy
    @day_food.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_day_food
      @day_food = DayFood.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def day_food_params
      params.require(:day_food).permit(:day_id, :food_id)
    end
end
