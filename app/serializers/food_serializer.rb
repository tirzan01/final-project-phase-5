class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :fibres, :sugars, :proteins, :fats, :carbs
end
