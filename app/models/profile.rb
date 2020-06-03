class Profile < ApplicationRecord
  belongs_to :user, optional: true
  validates :family_name, :first_name, :family_name_kana, :first_name_kana, :birthday, :phone_number, presence: true

  validates :phone_number, format: {with: /\d{2,4}-?\d{2,4}-?\d{3,4}/}
end
