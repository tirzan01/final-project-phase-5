class CreateFollowers < ActiveRecord::Migration[7.0]
  def change
    create_table "user_connections", :force => true, :id => false do |t|
      t.integer "followed_id", :null => false
      t.integer "follower_id", :null => false
    end
  end
end
