class AddDateToStatistic < ActiveRecord::Migration
  def self.up
    add_column :statistics, :date, :string
  end

  def self.down
  end
end
