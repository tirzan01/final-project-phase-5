class AddProfileImgBgImgToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :profile_img, :integer
    add_column :users, :bg_img, :integer
  end
end
