class AddToWeek < ActiveRecord::Migration
  def self.up
    add_column :weeks, :description, :text
  end

  def self.down
  end
end
