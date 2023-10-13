function displayLastModifiedDate() {
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toDateString();
    document.write("Last Modified Date: " + formattedDate);
}