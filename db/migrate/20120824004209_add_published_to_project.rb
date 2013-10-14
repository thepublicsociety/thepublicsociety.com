class AddPublishedToProject < ActiveRecord::Migration
  def self.up
    add_column :projects, :published, :boolean, :default => false
  end

  def self.down
  end
end
