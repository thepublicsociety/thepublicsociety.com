class AddBlurbToProject < ActiveRecord::Migration
  def self.up
    add_column :projects, :blurb, :text
  end

  def self.down
  end
end
