class CreateDays < ActiveRecord::Migration[7.0]
  def change
    create_table :days do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
