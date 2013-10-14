class CreateProjectsTypesJoinTable < ActiveRecord::Migration
  def self.up
    create_table :projects_types, :id => false do |t|
      t.integer :project_id
      t.integer :type_id
    end
    add_index :projects_types, [:project_id, :type_id]
  end

  def self.down
  end
end
