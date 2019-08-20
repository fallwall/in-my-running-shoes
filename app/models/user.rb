class User < ApplicationRecord
  has_secure_password
  has_many :races, dependent: :destroy
  has_many :notes, through: :races, dependent: :destroy

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  
  def race_count
    self.races.count
  end

  def note_count
    self.notes.count
  end

end
