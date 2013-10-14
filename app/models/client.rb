class Client < ActiveRecord::Base
  has_and_belongs_to_many :projects
  has_attached_file :logo, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "600x600>"}
end
