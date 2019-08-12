class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :message
      t.time :finish_time
      t.integer :bib_number
      t.references :race, foreign_key: true

      t.timestamps
    end
  end
end
