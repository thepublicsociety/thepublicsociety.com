class CreateDaysMonthsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :days_months, :id => false do |t|
      t.integer :day_id
      t.integer :month_id
    end
    add_index :days_months, [:day_id, :month_id]
  end

  def self.down
  end
end
