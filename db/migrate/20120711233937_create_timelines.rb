class CreateTimelines < ActiveRecord::Migration
  def self.up
    create_table :timelines do |t|
      t.integer :project_id
      t.integer :month_id
      t.string :name
      t.text :description
      t.timestamps
    end
  end

  def self.down
    drop_table :timelines
  end
end
