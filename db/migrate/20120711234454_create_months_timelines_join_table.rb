class CreateMonthsTimelinesJoinTable < ActiveRecord::Migration
  def self.up
    create_table :months_timelines, :id => false do |t|
      t.integer :month_id
      t.integer :timeline_id
    end
    add_index :months_timelines, [:month_id, :timeline_id]
  end

  def self.down
  end
end
