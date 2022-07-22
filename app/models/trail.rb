class Trail < ApplicationRecord
    validates :name, presence: true
    validates :lat, presence: true
    validates :lng, presence: true

    has_many :reviews
    has_many :lists_trails
    has_one_attached :photo
end
