class AddCategoryToStatistic < ActiveRecord::Migration
  def self.up
    add_column :statistics, :category, :string
  end

  def self.down
  end
end
