user = review.user

json.set! :reviewer, "#{user[:fname]} #{user[:lname]}"

json.set! :reviewer_img, url_for(user.photo)

json.extract! review,
    :id, :rating, :text,
    :user_id, :trail_id,
    :created_at
