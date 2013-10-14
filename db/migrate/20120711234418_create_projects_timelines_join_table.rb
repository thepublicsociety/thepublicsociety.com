class CreateProjectsTimelinesJoinTable < ActiveRecord::Migration
  def self.up
    create_table :projects_timelines, :id => false do |t|
      t.integer :project_id
      t.integer :timeline_id
    end
    add_index :projects_timelines, [:project_id, :timeline_id]
  end

  def self.down
  end
end
