export const createList = lists => $.ajax({
    url: "api/lists",
    method: "POST",
    data: { lists }
});

export const fetchLists = userId => $.ajax({
    url: "api/lists",
    method: "GET",
    data: { userId }
});
