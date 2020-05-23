class RemoveBirthYearInProfiles < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :birth_year, :integer, null: false
    remove_column :profiles, :birth_month, :integer,null: false
    remove_column :profiles, :birth_day, :integer, null: false
    
    add_column :profiles, :birthday, :integer, null: false

  end
end
