class CreateDayFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :day_foods do |t|
      t.belongs_to :day, null: false, foreign_key: true
      t.belongs_to :food, null: false, foreign_key: true
      t.integer :qty
      t.string :time

      t.timestamps
    end
  end
end
