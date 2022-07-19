export const fetchLists = userId => $.ajax({
    url: "api/lists",
    method: "GET",
    data: { userId }
});

export const createList = list => $.ajax({
    url: "api/lists",
    method: "POST",
    data: { list }
});
