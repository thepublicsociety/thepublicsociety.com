class CreateMonthsYearsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :months_years, :id => false do |t|
      t.integer :month_id
      t.integer :year_id
    end
    add_index :months_years, [:month_id, :year_id]
  end

  def self.down
  end
end
