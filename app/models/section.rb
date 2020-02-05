class Section < ApplicationRecord
  has_many :episodes
  belongs_to :course
end
