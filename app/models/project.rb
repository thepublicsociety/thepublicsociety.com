class Project < ActiveRecord::Base
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :types
  has_and_belongs_to_many :timelines
  has_and_belongs_to_many :years
  has_and_belongs_to_many :months
  has_and_belongs_to_many :clients
  has_and_belongs_to_many :staffs
  has_and_belongs_to_many :weeks
  has_and_belongs_to_many :statistics
  has_and_belongs_to_many :operations
  has_many :graphs
  accepts_nested_attributes_for :statistics
  accepts_nested_attributes_for :operations, :allow_destroy => true
  has_attached_file :companylogo, :styles => {:thumb => "110x110>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
  has_attached_file :secondaryphoto, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
  has_attached_file :tertiaryphoto, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
  has_attached_file :quaternaryphoto, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
  has_attached_file :quinaryphoto, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
  has_attached_file :fullbleed, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
  has_attached_file :workthumb, :styles => {:thumb => "80x80>", :medium => "250x250>", :large => "300x300#"}, :processors => [:cropper], :default_url => "/images/missing.png"
  has_attached_file :linephoto, :styles => {:thumb => "110x110>", :medium => "250x250>", :large => "500x500>"}, :default_url => "/images/missing.png"
  has_many :photos, :dependent => :destroy
  accepts_nested_attributes_for :photos, :allow_destroy => true
  
  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
  after_update :reprocess_workthumb, :if => :cropping?

    def cropping?
      !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
    end
    def workthumb_geometry(style = :original)
      @geometry ||= {}
      @geometry[style] ||= Paperclip::Geometry.from_file(workthumb.path(style))
    end
    
    private
    def reprocess_workthumb
      workthumb.reprocess!
    end
    
end
