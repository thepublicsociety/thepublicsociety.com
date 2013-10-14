class CreateProjectsStaffsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :projects_staffs, :id => false do |t|
      t.integer :project_id
      t.integer :staff_id
    end
    add_index :projects_staffs, [:project_id, :staff_id]
  end

  def self.down
  end
end
