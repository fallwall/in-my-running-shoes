class RemoveCityFromRace < ActiveRecord::Migration[5.2]
  def change
    remove_column :races, :city, :string
  end
end
