class TodayDaySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :day
end
