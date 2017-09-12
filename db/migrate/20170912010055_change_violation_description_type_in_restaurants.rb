class ChangeViolationDescriptionTypeInRestaurants < ActiveRecord::Migration[5.0]
  def self.up 
    change_column :restaurants, :violation_description, :text
  end

  def self.down
    change_column :restaurants, :violation_description, :string
  end
end
