class Food < ApplicationRecord
  has_many :day_foods
  has_many :days, through: :day_foods

  def self.query(str)
    where("lower(name) LIKE :prefix", prefix: "#{str}%").limit(6).map{ |f| f.index_render }.uniq
  end

  def index_render
    {
      label: self.name,
      id: self.id
    }
  end
end
