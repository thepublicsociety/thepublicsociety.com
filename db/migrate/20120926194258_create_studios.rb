class CreateStudios < ActiveRecord::Migration
  def self.up
    create_table :studios do |t|
      t.text :content
      t.string :name
      t.string :title
      t.timestamps
    end
  end

  def self.down
    drop_table :studios
  end
end
