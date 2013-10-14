class AddAttachmentSnapshot2ToWeek < ActiveRecord::Migration
  def self.up
    add_column :weeks, :snapshot2_file_name, :string
    add_column :weeks, :snapshot2_content_type, :string
    add_column :weeks, :snapshot2_file_size, :integer
    add_column :weeks, :snapshot2_updated_at, :datetime
  end

  def self.down
    remove_column :weeks, :snapshot2_file_name
    remove_column :weeks, :snapshot2_content_type
    remove_column :weeks, :snapshot2_file_size
    remove_column :weeks, :snapshot2_updated_at
  end
end
