class Course < ApplicationRecord
    has_many :sections
    has_many :epiodes , through: :sections
end
