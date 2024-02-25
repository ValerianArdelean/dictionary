let words = ["fara", "cuvinte"];
document.getElementById("searchBttn").addEventListener("click", function(event) {
    event.preventDefault();
    let searchedWord = event.srcElement.form[1].value;
    let searchResult = words.includes(searchedWord);
    let p = document.createElement("p");
    p.innerText = `The searched word: ${searchedWord} is NOT present in our list !`;
    if (searchResult) {
        p.innerText = `The searched word: ${searchedWord}  it IS present in our list ! `;
    }
    document.getElementById("left").appendChild(p);
});
