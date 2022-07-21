json.set! :id, user[:id]
json.set! :email, user[:email]
json.set! :created_at, user[:created_at]

json.set! :fname, user[:fname]
json.set! :lname, user[:lname]
json.set! :city, user[:city]
json.set! :state, user[:state]
json.set! :about_me, user[:about_me]

if user.photo.attached?
    json.set! :profile_img, url_for(user.photo)
else
    json.set! :profile_img, asset_path("user_icon.png")
end
