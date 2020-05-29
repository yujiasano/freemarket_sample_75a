class RenameSrcColumnToImages < ActiveRecord::Migration[5.2]
  def change
    rename_column :images, :src, :image
  end
end
