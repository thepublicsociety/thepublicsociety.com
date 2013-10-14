class CreateProjectsStatisticsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :projects_statistics, :id => false do |t|
      t.integer :project_id
      t.integer :statistic_id
    end
    add_index :projects_statistics, [:project_id, :statistic_id]
  end

  def self.down
  end
end
