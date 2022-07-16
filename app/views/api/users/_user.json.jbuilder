json.extract! user,
    :id, :email, :fname, :lname,
    :about_me, :city, :state, :created_at

json.set! :profile_img, url_for(user.photo)
