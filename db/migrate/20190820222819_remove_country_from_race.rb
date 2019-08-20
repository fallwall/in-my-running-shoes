class RemoveCountryFromRace < ActiveRecord::Migration[5.2]
  def change
    remove_column :races, :country, :string
  end
end
