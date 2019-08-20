class Note < ApplicationRecord
  include PublicActivity::Model
  tracked owner: :user, recipient: :race

  belongs_to :race
  belongs_to :user
end
