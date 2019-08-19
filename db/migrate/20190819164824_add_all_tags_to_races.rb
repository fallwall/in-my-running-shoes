class AddAllTagsToRaces < ActiveRecord::Migration[5.2]
  def change
    add_column :races, :all_tags, :string
  end
end
