class AddPubToStatistic < ActiveRecord::Migration
  def self.up
    add_column :statistics, :pub, :boolean, :default => true
  end

  def self.down
  end
end
