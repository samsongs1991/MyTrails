class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name
      t.float :lat
      t.float :lng
      t.string :location
      t.string :city
      t.string :state
      t.string :country
      t.string :difficulty
      t.float :length
      t.integer :gain
      t.string :category
      t.timestamps
    end
  end
end
