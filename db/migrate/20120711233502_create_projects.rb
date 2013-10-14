class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.integer :category_id
      t.integer :type_id
      t.integer :month_id
      t.integer :timeline_id
      t.string :name
      t.text :description
      t.text :duration
      t.string :startdate
      t.string :enddate
      t.timestamps
    end
  end

  def self.down
    drop_table :projects
  end
end
