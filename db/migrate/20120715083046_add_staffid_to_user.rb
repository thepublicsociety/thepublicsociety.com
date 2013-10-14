class AddStaffidToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :staff_id, :integer
  end

  def self.down
  end
end
