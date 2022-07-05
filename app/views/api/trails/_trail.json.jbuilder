json.extract! trail,
    :id, :name, :lat, :lng, 
    :location, :city, :state, :country,
    :difficulty, :length, :gain, :category

json.set! :key, 
    ENV['WEATHER_API_KEY']