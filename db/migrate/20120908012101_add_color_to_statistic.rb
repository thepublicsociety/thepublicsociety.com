class AddColorToStatistic < ActiveRecord::Migration
  def self.up
    add_column :statistics, :color, :string
  end

  def self.down
  end
end
