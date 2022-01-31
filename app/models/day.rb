class Day < ApplicationRecord
  belongs_to :user
  has_many :day_foods
  has_many :foods, through: :day_foods
  accepts_nested_attributes_for :day_foods
  has_many :likes
  has_many :users, through: :likes
  has_many :selected_days
  has_many :users, through: :selected_days

  validates :user_id, :name, presence: true
  validates :name, uniqueness: true

  def self.select_by_user(user_id)
    self.where('user_id = ?', user_id).reverse
  end

  def self.select_sort(sort_by, user)
    case sort_by
    when 'newest-friends'
      user.followed.map{ |u| u.days }.flatten.sort{ |a, b| b.created_at - a.created_at }
    when 'newest-all'
      self.order('created_at DESC').limit(20)
    when 'most-liked'
      self.all.sort{ |a, b| b.likes_count - a.likes_count }
    end
  end

  def likes_count
    Like.where('day_id = ?', self.id).count
  end

  def self.create_from_params(params)
    new_day = self.new(name: params[:name], user_id: params[:user_id])

    return new_day unless new_day.valid?

    return false unless new_day.save

    params[:day_foods].each do |meal|
      meal[:foods].each do |food|
        DayFood.create(food_id: food[:foodId], day: new_day, time: meal[:time], qty: food[:qty].to_i)
      end
    end
    new_day
  end

  def arrange_meals
    meals = self.day_foods.map{ |m| m.render_with_name }
  end

  def json_to_render(user_id)
    {
      day_info: self,
      meals: self.arrange_meals,
      user_name: self.user.user_name,
      likes: {
        count: self.likes.size,
        liked: self.likes.where('user_id = ?', user_id)[0].present?
      },
      times_used: SelectedDay.times_used(user_id, self.id)
    }
  end

  def selected_day
    {
      day_info: self,
      meals: self.arrange_meals
    }
  end
end
