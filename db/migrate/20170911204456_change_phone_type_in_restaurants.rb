class ChangePhoneTypeInRestaurants < ActiveRecord::Migration[5.0]
  def self.up
    change_column :restaurants, :phone, :float
  end

  def self.down
    change_column :restaurants, :phone, :integer
  end
end
