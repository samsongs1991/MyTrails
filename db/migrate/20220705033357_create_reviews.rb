class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :text
      t.integer :user_id, null: false
      t.integer :trail_id, null: false
      t.timestamps
    end
  end
end
