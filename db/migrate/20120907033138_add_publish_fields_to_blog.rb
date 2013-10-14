class AddPublishFieldsToBlog < ActiveRecord::Migration
  def self.up
    add_column :blogs, :publishedtotimeline, :boolean, :default => false
    add_column :blogs, :published, :boolean, :default => false
  end

  def self.down
  end
end
