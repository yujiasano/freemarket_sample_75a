class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.text   :description, null: false
      t.integer :price, null: false
      t.string :status, null: false
      t.string :size
      t.string :trading_status, null: false
      t.string :delivery_area, null: false
      t.string :delivery_days, null: false
      t.string :delivery_burden, null: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
