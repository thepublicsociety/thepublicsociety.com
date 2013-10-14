class AddNumberToPhotos < ActiveRecord::Migration
  def self.up
    add_column :photos, :number, :integer
  end

  def self.down
    remove_column :photos, :number
  end
end
