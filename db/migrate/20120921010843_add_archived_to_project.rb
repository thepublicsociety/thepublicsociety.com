class AddArchivedToProject < ActiveRecord::Migration
  def self.up
    add_column :projects, :archived, :boolean, :default => false
  end

  def self.down
  end
end
