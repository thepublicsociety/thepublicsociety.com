class Photo < ActiveRecord::Base
  belongs_to :project
  has_attached_file :image, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
end
