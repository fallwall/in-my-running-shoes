class User < ApplicationRecord
  has_many :races, dependent: :destroy
  has_many :students, dependent: :destroy
end
