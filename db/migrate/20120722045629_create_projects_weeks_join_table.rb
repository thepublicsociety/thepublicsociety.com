class CreateProjectsWeeksJoinTable < ActiveRecord::Migration
  def self.up
    create_table :projects_weeks, :id => false do |t|
      t.integer :project_id
      t.integer :week_id
    end
    add_index :projects_weeks, [:project_id, :week_id]
  end

  def self.down
  end
end
