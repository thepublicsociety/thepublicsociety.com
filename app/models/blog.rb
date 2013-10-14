class Blog < ActiveRecord::Base
  belongs_to :user
  has_attached_file :photo, :styles => {:thumb => "80x80>", :medium => "271x442#", :large => "600x600>"}
  has_attached_file :photo2, :styles => {:thumb => "80x80>", :medium => "271x442#", :large => "600x600>"}
  has_attached_file :photo3, :styles => {:thumb => "80x80>", :medium => "271x442#", :large => "600x600>"}
  has_attached_file :photo4, :styles => {:thumb => "80x80>", :medium => "271x442#", :large => "600x600>"}
  has_attached_file :photo5, :styles => {:thumb => "80x80>", :medium => "271x442#", :large => "600x600>"}
end
