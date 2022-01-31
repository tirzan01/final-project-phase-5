class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :day

  validates :content, :user_id, :day_id, presence: true
end
