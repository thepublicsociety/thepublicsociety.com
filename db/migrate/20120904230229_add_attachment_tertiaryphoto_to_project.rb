class AddAttachmentTertiaryphotoToProject < ActiveRecord::Migration
  def self.up
    add_column :projects, :tertiaryphoto_file_name, :string
    add_column :projects, :tertiaryphoto_content_type, :string
    add_column :projects, :tertiaryphoto_file_size, :integer
    add_column :projects, :tertiaryphoto_updated_at, :datetime
  end

  def self.down
    remove_column :projects, :tertiaryphoto_file_name
    remove_column :projects, :tertiaryphoto_content_type
    remove_column :projects, :tertiaryphoto_file_size
    remove_column :projects, :tertiaryphoto_updated_at
  end
end
