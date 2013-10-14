class AddPositionToProjects < ActiveRecord::Migration
  def self.up
    add_column :projects, :position, :string
  end

  def self.down
    remove_column :projects, :position
  end
end
