class ChangeFinishTimeToBeStringInNotes < ActiveRecord::Migration[5.2]
  def change
    change_column :notes, :finish_time, :string
  end
end
