class Statistic < ActiveRecord::Base
  has_and_belongs_to_many :projects
  belongs_to :graph
  has_many :substats
  accepts_nested_attributes_for :substats, :allow_destroy => true
end
