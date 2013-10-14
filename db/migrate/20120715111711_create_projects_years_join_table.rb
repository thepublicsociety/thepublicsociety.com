class CreateProjectsYearsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :projects_years, :id => false do |t|
      t.integer :project_id
      t.integer :year_id
    end
    add_index :projects_years, [:project_id, :year_id]
  end

  def self.down
  end
end
