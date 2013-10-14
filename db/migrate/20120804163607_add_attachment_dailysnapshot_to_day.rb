class AddAttachmentDailysnapshotToDay < ActiveRecord::Migration
  def self.up
    add_column :days, :dailysnapshot_file_name, :string
    add_column :days, :dailysnapshot_content_type, :string
    add_column :days, :dailysnapshot_file_size, :integer
    add_column :days, :dailysnapshot_updated_at, :datetime
  end

  def self.down
    remove_column :days, :dailysnapshot_file_name
    remove_column :days, :dailysnapshot_content_type
    remove_column :days, :dailysnapshot_file_size
    remove_column :days, :dailysnapshot_updated_at
  end
end
