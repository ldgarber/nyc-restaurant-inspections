class Initial < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|

      t.float :camis
      t.string :name
      t.string :boro
      t.float :building
      t.string :street
      t.integer :zipcode
      t.integer :phone
      t.string :cuisine_description
      t.date :inspection_date
      t.string :action
      t.string :violation_code
      t.string :violation_description
      t.string :critical_flag
      t.integer :score
      t.string :grade
      t.date :grade_date
      t.date :record_date
      t.string :inspection_type

      t.timestamps null: false
    end
  end
end
