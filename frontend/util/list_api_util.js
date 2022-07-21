export const fetchLists = user_id => $.ajax({
    url: "api/lists",
    method: "GET",
    data: { user_id }
});

export const createList = list => $.ajax({
    url: "api/lists",
    method: "POST",
    data: { list }
});

export const updateList = formData => $.ajax({
    url: `api/lists/${formData.get("id")}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false
});

export const deleteList = listId => $.ajax({
    url: `api/lists/${listId}`,
    method: "DELETE"
});
