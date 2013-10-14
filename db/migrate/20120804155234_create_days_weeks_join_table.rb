class CreateDaysWeeksJoinTable < ActiveRecord::Migration
  def self.up
    create_table :days_weeks, :id => false do |t|
      t.integer :day_id
      t.integer :week_id
    end
    add_index :days_weeks, [:day_id, :week_id]
  end

  def self.down
  end
end
