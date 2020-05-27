class ChangeDataBirthdayToProfiles < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :birthday, :date, null: false
  end
end
