json.extract! trail,
    :id, :name, :lat, :lng,
    :location, :city, :state, :country,
    :difficulty, :length, :gain, :category

json.set! :key,
    # ENV['WEATHER_API_KEY']
    Rails.application.credentials.weather[:api_key]

count = 0;
sum = 0;
avg_rating = 5;
trail.reviews.each do |review|
    count += 1
    sum += review.rating
end

if count > 0
    avg_rating = (Float(sum) / Float(count)).round(2)
end

json.set! :avg_rating,
    avg_rating

json.set! :trail_img, url_for(trail.photo)
