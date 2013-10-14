class AddAbbrToMonth < ActiveRecord::Migration
  def self.up
    add_column :months, :abbr, :string
  end

  def self.down
  end
end
