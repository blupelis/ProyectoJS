const url = "www.omdbapi.com/?i=tt3896198&apikey=4a0ce318";
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    for (i=0;i<data.length;i++) {
        document.getElementById("Result").innerHTML = `<p>${data[i].name} ${data[i].username}</p>`
     };


})
.catch(function(error) {
console.log(JSON.stringify(error));
}); 