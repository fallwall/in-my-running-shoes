class CreateRaces < ActiveRecord::Migration[5.2]
  def change
    create_table :races do |t|
      t.string :name
      t.date :date
      t.string :description
      t.string :city
      t.string :state
      t.string :country
      t.string :organization
      t.float :distance
      t.string :website
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
