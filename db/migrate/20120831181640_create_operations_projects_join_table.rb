class CreateOperationsProjectsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :operations_projects, :id => false do |t|
      t.integer :operation_id
      t.integer :project_id
    end
    add_index :operations_projects, [:operation_id, :project_id]
  end

  def self.down
  end
end
