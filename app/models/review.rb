class Review < ApplicationRecord
    validates :user_id, presence: true
    validates :trail_id, presence: true
    validates :rating, presence: true, inclusion: { in: [0, 1, 2, 3, 4, 5] }
    
    belongs_to :user
    belongs_to :trail
end