class CreateDaysStatsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :days_stats, :id => false do |t|
      t.integer :day_id
      t.integer :stat_id
    end
    add_index :days_stats, [:day_id, :stat_id]
  end

  def self.down
  end
end
