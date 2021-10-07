class EditArtworks2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :artist_id
    add_column :artworks, :artist_id, :integer, null: false

    add_index :artworks, :artist_id
  end
end
