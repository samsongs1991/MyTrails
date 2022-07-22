export const createListsTrail = listsTrail => $.ajax({
    url: "api/lists_trails",
    method: "POST",
    data: { lists_trail: listsTrail }
});

export const fetchListsTrails = listId => $.ajax({
    url: "api/lists_trails",
    method: "GET",
    data: { list_id: listId }
});

export const deleteListsTrail = listsTrailId => $.ajax({
    url: `api/lists_trails/${listsTrailId}`,
    method: "DELETE"
});
