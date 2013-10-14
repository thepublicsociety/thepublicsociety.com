class CreateDays < ActiveRecord::Migration
  def self.up
    create_table :days do |t|
      t.string :name
      t.string :date
      t.text :description
      t.text :notes
      t.timestamps
    end
  end

  def self.down
    drop_table :days
  end
end
