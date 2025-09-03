function search() {
    let word = document.getElementById("searchWord").value;
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
}

function setData(data) {
    document.getElementById("word").innerText = data[0].word;
    document.getElementById("mean").innerText = data[0].meanings[0].definitions[0].definition;
    console.log(data[0].phonetics[0].audio);
    
    document.getElementById("audio").src = data[0].phonetics[1].audio;

}