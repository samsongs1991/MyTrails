export const updateUser = formData => $.ajax({
    url: `api/users/${formData.get("id")}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false
});
