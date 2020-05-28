class AddNameTobrands < ActiveRecord::Migration[5.2]
  def change
    add_column :brands, :name, :string
  end
end
