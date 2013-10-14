class AddMediumToProject < ActiveRecord::Migration
  def self.up
    add_column :projects, :medium, :string
  end

  def self.down
  end
end
