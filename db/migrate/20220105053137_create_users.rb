class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :first_name
      t.string :last_name
      t.string :bio
      t.string :email
      t.string :password_digest
      t.string :sex
      t.datetime :dob
      t.integer :height
      t.string :curr_weight
      t.string :goal_weight

      t.timestamps
    end
  end
end
