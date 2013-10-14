class Graph < ActiveRecord::Base
  belongs_to :project
  has_many :statistics
  accepts_nested_attributes_for :statistics
end
