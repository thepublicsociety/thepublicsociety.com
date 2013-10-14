class CreateDaysYearsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :days_years, :id => false do |t|
      t.integer :day_id
      t.integer :year_id
    end
    add_index :days_years, [:day_id, :year_id]
  end

  def self.down
  end
end
