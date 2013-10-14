class AddGraphIdToStatistic < ActiveRecord::Migration
  def self.up
    add_column :statistics, :graph_id, :integer
  end

  def self.down
  end
end
