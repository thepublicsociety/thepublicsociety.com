class Month < ActiveRecord::Base
  has_and_belongs_to_many :projects
  has_and_belongs_to_many :timelines
  has_and_belongs_to_many :years
  has_and_belongs_to_many :days
end
