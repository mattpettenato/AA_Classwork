class CreateSubs < ActiveRecord::Migration[5.2]
  def change
    create_table :subs do |t|
      t.string :subreddit, null: false
      t.text :description, null: false
      t.integer :mod_id, null: false
      t.timestamps
    end

    add_index :subs, :subreddit, unique: true
    add_index :subs, [:mod_id, :subreddit], unique: true
  end
end
