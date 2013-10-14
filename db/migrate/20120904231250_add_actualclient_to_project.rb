class AddActualclientToProject < ActiveRecord::Migration
  def self.up
    add_column :projects, :actualclient, :string
  end

  def self.down
  end
end
