class SelectedDay < ApplicationRecord
  belongs_to :user
  belongs_to :day

  validates :day_id, presence: true

  def add_user_time(user_id)
    self.user_id = user_id
    self.date = (Time.now + 1.day).strftime("%Y %m %d")
  end

  def create_date
    date = self.date.split(' ')

    "#{date[2]} #{self.months[date[1]]} #{date[0]}"
  end

  def render
    {
      id: self.id,
      user_id: self.user.id,
      day_id: self.day.id,
      date: self.create_date
    }
  end

  def self.times_used(user_id, day_id)
    self.where(
      'user_id = ? AND day_id = ?', user_id, day_id
    ).size
  end

  def index_render
    {
      id: self.id,
      day: self.day.selected_day,
      date: self.create_date,
    }
  end

  def months
    {
      '01' => 'January',
      '02' => 'February',
      '03' => 'March',
      '04' => 'April',
      '05' => 'May',
      '06' => 'June',
      '07' => 'July',
      '08' => 'August',
      '09' => 'September',
      '10' => 'October',
      '11' => 'November',
      '12' => 'December'
    }
  end
end