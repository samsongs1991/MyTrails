@trails.each do |trail|
    json.set! trail.id do
        json.extract! trail,
            :name, :lat, :lng, 
            :location, :city, :state, :country,
            :difficulty, :length, :gain, :category    
    end
end