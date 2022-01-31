class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :first_name, :last_name, :bio, :email, :password, :sex, :dob, :height, :curr_weight, :goal_weight
end
