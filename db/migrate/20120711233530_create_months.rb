class CreateMonths < ActiveRecord::Migration
  def self.up
    create_table :months do |t|
      t.integer :project_id
      t.integer :timeline_id
      t.string :name
      t.text :description
      t.timestamps
    end
  end

  def self.down
    drop_table :months
  end
end
