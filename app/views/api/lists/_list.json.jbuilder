json.extract! list,
    :id, :name

if list.photo.attached?
    json.set! :list_img, url_for(list.photo)
end
