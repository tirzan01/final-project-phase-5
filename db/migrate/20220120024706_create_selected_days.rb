class CreateSelectedDays < ActiveRecord::Migration[7.0]
  def change
    create_table :selected_days do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :day, null: false, foreign_key: true
      t.string :date

      t.timestamps
    end
  end
end
