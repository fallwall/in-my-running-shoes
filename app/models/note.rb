class Note < ApplicationRecord
  include PublicActivity::Model
  tracked owner: :user

  belongs_to :race
  belongs_to :user
end
