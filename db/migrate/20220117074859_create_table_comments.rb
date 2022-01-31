class CreateTableComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :day, null: false, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
