class Day < ActiveRecord::Base
  has_and_belongs_to_many :stats
  accepts_nested_attributes_for :stats
  has_and_belongs_to_many :weeks
  has_and_belongs_to_many :years
  has_and_belongs_to_many :months
  has_attached_file :dailysnapshot, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "600x600>"}
end
