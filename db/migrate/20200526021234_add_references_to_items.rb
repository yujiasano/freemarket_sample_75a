class AddReferencesToItems < ActiveRecord::Migration[5.2]
    add_reference :items, :category, null: false, foreign_key: true
  end
end
