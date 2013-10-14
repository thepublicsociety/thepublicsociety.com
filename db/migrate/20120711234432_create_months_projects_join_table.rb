class CreateMonthsProjectsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :months_projects, :id => false do |t|
      t.integer :month_id
      t.integer :project_id
    end
    add_index :months_projects, [:month_id, :project_id]
  end

  def self.down
  end
end
