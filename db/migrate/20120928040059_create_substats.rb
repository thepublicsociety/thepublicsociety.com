class CreateSubstats < ActiveRecord::Migration
  def self.up
    create_table :substats do |t|
      t.integer :statistic_id
      t.integer :value
      t.timestamps
    end
  end

  def self.down
    drop_table :substats
  end
end
