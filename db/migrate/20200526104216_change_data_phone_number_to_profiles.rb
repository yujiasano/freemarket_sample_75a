class ChangeDataPhoneNumberToProfiles < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :phone_number, :string, null: false
  end
end
