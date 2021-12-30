class Food < ApplicationRecord
  def foods
    self.class.all
  end
end
