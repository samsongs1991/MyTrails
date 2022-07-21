class CreateListsTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :lists_trails do |t|
      t.integer :list_id, null: false
      t.integer :trail_id, null: false
      t.timestamps
    end
  end
end
