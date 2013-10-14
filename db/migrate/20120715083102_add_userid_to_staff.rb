class AddUseridToStaff < ActiveRecord::Migration
  def self.up
    add_column :staffs, :user_id, :integer
  end

  def self.down
  end
end
