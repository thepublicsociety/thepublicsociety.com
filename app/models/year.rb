class Year < ActiveRecord::Base
  has_and_belongs_to_many :projects
  has_and_belongs_to_many :months
  has_and_belongs_to_many :timelines
  has_and_belongs_to_many :weeks
  has_and_belongs_to_many :days
end
