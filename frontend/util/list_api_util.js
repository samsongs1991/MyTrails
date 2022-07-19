export const fetchLists = userId => $.ajax({
    url: "api/lists",
    method: "GET",
    data: { userId }
});

export const createList = lists => $.ajax({
    url: "api/lists",
    method: "POST",
    data: { lists }
});
