class AddGraphtypeToGraph < ActiveRecord::Migration
  def self.up
    add_column :graphs, :graphtype, :string
  end

  def self.down
  end
end
