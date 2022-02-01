class Weight < ApplicationRecord
  belongs_to :user

  def add_user_time
    self.user_id = user_id
    self.date = (Time.now.day).strftime("%Y %m %d")
  end

  def index_render(user)
    {
      prev_weights: user.weights.reverse.map{ |w| w.render },
      weight: self.curr_weight,
      goal_weight: user.goal_weight
      is_editable: self.is_editable?
    }
  end

  def render
    {
      id: self.id,
      date: self.create_date,
      weight: self.weight
    }
  end

  def create_date
    date = self.date.split(' ')

    "#{date[2]} #{self.months[date[1]]} #{date[0]}"
  end

  def is_editable?
    self.date > (Time.now - 7.day).strftime("%Y %m %d")
  end
end
