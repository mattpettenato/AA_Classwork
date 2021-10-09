class EditCatsTable2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :cats, :null_false
  end
end
