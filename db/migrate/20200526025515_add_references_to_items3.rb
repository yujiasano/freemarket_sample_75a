class AddReferencesToItems3 < ActiveRecord::Migration[5.2]
  def up
    add_reference :items, :brand, foreign_key: true
  end
  def down
    add_reference :items, :brand, null: false, foreign_key: true
  end
end
