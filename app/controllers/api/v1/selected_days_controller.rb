class Api::V1::SelectedDaysController < ApplicationController
  before_action :set_selected_day, only: %i[ show create tomorrow destroy ]

  # GET /selected_days
  def index
    previous_days = SelectedDay.where('user_id = ?', params[:user_id]).order('date DESC')

    render json: previous_days.map{ |day| day.index_render }
  end

  # GET /selected_days/1
  def show
    render json: @selected_day ? @selected_day.render : {}
  end

  # POST /selected_days
  def create
    unless @selected_day
      @selected_day = SelectedDay.new(selected_day_params)
      @selected_day.add_user_time(session[:user_id])

      if @selected_day.save
        render json: @selected_day, status: :created
      else
        render json: @selected_day.errors, status: :unprocessable_entity
      end
    else
      if @selected_day.update(selected_day_params)
        render json: @selected_day
      else
        render json: @selected_day.errors, status: :unprocessable_entity
      end
    end
  end

  def today
    selected_day = SelectedDay.where('user_id = ? AND date = ?', session[:user_id], (Time.now).strftime("%Y %m %d")).first

    render json: selected_day ? selected_day.render : {}
  end

  def tomorrow
    render json: @selected_day ? @selected_day.render : {}
  end

  # DELETE /selected_days/1
  def destroy
    @selected_day.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_selected_day
      @selected_day = SelectedDay.where('user_id = ? AND date = ?', session[:user_id], (Time.now + 1.day).strftime("%Y %m %d")).first
    end

    # Only allow a list of trusted parameters through.
    def selected_day_params
      params.require(:selected_day).permit(:day_id)
    end
end
