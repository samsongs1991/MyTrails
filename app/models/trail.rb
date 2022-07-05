class Trail < ApplicationRecord
    validates :name, presence: true
    validates :lat, presence: true
    validates :lng, presence: true

    has_many :reviews
end