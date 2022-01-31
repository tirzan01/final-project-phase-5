class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.float :calories
      t.float :fibres
      t.float :sugars
      t.float :proteins
      t.float :fats
      t.float :carbs

      t.timestamps
    end
  end
end
