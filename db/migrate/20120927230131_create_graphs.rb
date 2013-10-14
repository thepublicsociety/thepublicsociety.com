class CreateGraphs < ActiveRecord::Migration
  def self.up
    create_table :graphs do |t|
      t.string :name
      t.string :type
      t.boolean :shown, :default => false
      t.integer :project_id
      t.timestamps
    end
  end

  def self.down
    drop_table :graphs
  end
end
