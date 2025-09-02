let word = document.getElementById("searchWord").value;
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;

function search() {
    fetch(url)
        .then((res) => res.json)
        .then((data) => setData(data));
}

function setData(data){
    
}