class CreateStaffsUsersJoinTable < ActiveRecord::Migration
  def self.up
    create_table :staffs_users, :id => false do |t|
      t.integer :staff_id
      t.integer :user_id
    end
    add_index :staffs_users, [:staff_id, :user_id]
  end

  def self.down
  end
end
