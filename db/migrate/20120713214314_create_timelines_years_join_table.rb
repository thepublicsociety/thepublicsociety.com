class CreateTimelinesYearsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :timelines_years, :id => false do |t|
      t.integer :timeline_id
      t.integer :year_id
    end
    add_index :timelines_years, [:timeline_id, :year_id]
  end

  def self.down
  end
end
