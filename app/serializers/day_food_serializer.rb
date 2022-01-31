class DayFoodSerializer < ActiveModel::Serializer
  attributes :id
  has_one :day
  has_one :food
end
