class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :first_name
      t.string :last_name
      t.string :bio
      t.string :email
      t.string :password
      t.string :sex
      t.datetime :d_o_b
      t.integer :height
      t.integer :initial_weight
      t.integer :curr_weight
      t.integer :goal

      t.timestamps
    end
  end
end
