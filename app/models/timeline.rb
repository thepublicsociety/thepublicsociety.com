class Timeline < ActiveRecord::Base
  has_and_belongs_to_many :projects
  has_and_belongs_to_many :months
end
