class AddRoleToClient < ActiveRecord::Migration
  def self.up
    add_column :clients, :role, :text
  end

  def self.down
  end
end
