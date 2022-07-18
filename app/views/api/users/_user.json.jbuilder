json.extract! user,
    :id, :email, :fname, :lname,
    :about_me, :city, :state, :created_at

if user.photo.attached?
    json.set! :profile_img, url_for(user.photo)
else
    json.set! :profile_img, asset_path("user_icon.png")
end
