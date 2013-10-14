class CreateWeeksYearsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :weeks_years, :id => false do |t|
      t.integer :week_id
      t.integer :year_id
    end
    add_index :weeks_years, [:week_id, :year_id]
  end

  def self.down
  end
end
