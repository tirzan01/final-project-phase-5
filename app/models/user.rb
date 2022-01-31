class User < ApplicationRecord
  # validates :user_name, :first_name, :last_name, :email, :sex, :dob, :height, :curr_weight, :goal_weight, presence: true
  validates :user_name, :email, uniqueness: { case_sensitive: false }

  has_many :days
  has_many :likes
  has_many :days, through: :likes
  has_many :selected_days
  has_many :days, through: :selected_days
  has_and_belongs_to_many(
    :users,
    :join_table => "user_connections",
    :foreign_key => "followed_id",
    :association_foreign_key => "follower_id"
  )

  has_secure_password

  def self.query(str)
    if str == '' || !str
      self.all.limit(20)
    else
      self.where('lower(user_name) LIKE :prefix', prefix: "#{str.downcase}%").limit(20)
    end
  end

  def followers
    self.users
  end

  def followed
    User.all.filter{ |u| u.users.include? self }
  end

  def render(user_id)
    is_user_profile = self.id.to_i == user_id

    unless is_user_profile
      follower = User.find(user_id)
      is_followed = self.users.include?(follower)
    end

    {
      user: self,
      curr_user_profile: is_user_profile,
      follow_info: {
        is_followed: is_user_profile ? nil : is_followed,
        followers: self.followers.count,
        followed: self.followed.count
      },
      days_count: self.days.size
    }
  end

  def self.from_omniauth(resp)
    User.find_or_create_by(uid: resp[:uid], provider: resp[:provider]) do |u|
      u.user_name = resp[:info][:name]
      u.email = resp[:info][:email]
      u.password = SecureRandom.hex(15)
      p resp.info
    end
  end
end
