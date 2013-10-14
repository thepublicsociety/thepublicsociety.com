class CreateStats < ActiveRecord::Migration
  def self.up
    create_table :stats do |t|
      t.string :name
      t.text :description
      t.text :notes
      t.string :type
      t.integer :numericalname
      t.integer :numericalvalue
      t.timestamps
    end
  end

  def self.down
    drop_table :stats
  end
end
