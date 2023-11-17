function printFiles(e) {
    const files = e.target.files;
    let output = "";
    for (let i = 0; i < files.length; i++){
        const file = files[i];
        console.log(file);

        output += "<li><p><strong>" + file.name + "</strong></p>";
        output += "<p>Type: " + file.type || "n/a</p>";
        output += "<p>Size: " + file.size + " bytes</p>";
        output += "<p>Changed on: " + file.ModifiedDate.toLocaleDateString() + "</p></li>";
    }
    document.getElementsById("list").innerHTML = "<ul>" + output + "</ul>";
}
document.getElementById("files").addEventListener("change", printFiles);