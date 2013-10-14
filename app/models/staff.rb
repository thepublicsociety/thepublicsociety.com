class Staff < ActiveRecord::Base
  has_and_belongs_to_many :projects
  has_and_belongs_to_many :users
  has_attached_file :staffphoto, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
  has_attached_file :stafflogo, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
end
