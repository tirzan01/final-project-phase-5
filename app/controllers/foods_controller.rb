class FoodsController < ApplicationController
  def index
    foods = Food.all
    p foods
    render json: foods
  end
end