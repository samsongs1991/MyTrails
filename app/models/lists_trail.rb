class ListsTrail < ApplicationRecord
    validates :list_id, presence: true
    validates :trail_id, presence: true

    belongs_to :list
    belongs_to :trail
end
