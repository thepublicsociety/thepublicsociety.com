class AddToStaff < ActiveRecord::Migration
  def self.up
    add_column :staffs, :position, :string
    add_column :staffs, :bio, :text
  end

  def self.down
  end
end
