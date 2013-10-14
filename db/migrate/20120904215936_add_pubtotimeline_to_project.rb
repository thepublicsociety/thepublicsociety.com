class AddPubtotimelineToProject < ActiveRecord::Migration
  def self.up
    add_column :projects, :pubtotimeline, :boolean, :default => false
  end

  def self.down
  end
end
