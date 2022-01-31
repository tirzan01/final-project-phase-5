class DayFood < ApplicationRecord
  belongs_to :day
  belongs_to :food

  def render_with_name
    {
      time: self.time,
      food_name: self.food.name,
      qty: self.qty,
      food_id: self.food_id,
      day_id: self.day_id
    }
  end
end
