class CreateClientsProjectsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :clients_projects, :id => false do |t|
      t.integer :client_id
      t.integer :project_id
    end
    add_index :clients_projects, [:client_id, :project_id]
  end

  def self.down
  end
end
