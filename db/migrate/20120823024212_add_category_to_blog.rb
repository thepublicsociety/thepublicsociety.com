class AddCategoryToBlog < ActiveRecord::Migration
  def self.up
    add_column :blogs, :category, :string
  end

  def self.down
  end
end
