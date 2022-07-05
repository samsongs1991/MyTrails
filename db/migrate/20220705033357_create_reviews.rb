class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :text
      t.integer :user_id
      t.integer :trail_id
      t.timestamps
    end
  end
end
