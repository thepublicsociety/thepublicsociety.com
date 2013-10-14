class Operation < ActiveRecord::Base
  has_and_belongs_to_many :projects
  has_attached_file :snapshot, :styles => {:thumb => "80x80>", :medium => "365x271#", :large => "600x600>"}
  has_attached_file :snapshot2, :styles => {:thumb => "80x80>", :medium => "365x271#", :large => "600x600>"}
end
