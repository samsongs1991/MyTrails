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
