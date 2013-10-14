class CreateWeeks < ActiveRecord::Migration
  def self.up
    create_table :weeks do |t|
      t.integer :ynum
      t.integer :mnum
      t.string :name
      t.timestamps
    end
  end

  def self.down
    drop_table :weeks
  end
end
