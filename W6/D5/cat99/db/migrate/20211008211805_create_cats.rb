class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.date :birth_date, :null_false #oops
      t.string :color, null: false
      t.string :name, null: false
      t.string :sex, limit: 1, null: false
      t.text :description, null: false

      t.timestamps
    end
    #validates :color, :presence => true, :inclusion 
  end
end
