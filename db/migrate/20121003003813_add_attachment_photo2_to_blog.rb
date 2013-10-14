class AddAttachmentPhoto2ToBlog < ActiveRecord::Migration
  def self.up
    add_column :blogs, :photo2_file_name, :string
    add_column :blogs, :photo2_content_type, :string
    add_column :blogs, :photo2_file_size, :integer
    add_column :blogs, :photo2_updated_at, :datetime
  end

  def self.down
    remove_column :blogs, :photo2_file_name
    remove_column :blogs, :photo2_content_type
    remove_column :blogs, :photo2_file_size
    remove_column :blogs, :photo2_updated_at
  end
end
