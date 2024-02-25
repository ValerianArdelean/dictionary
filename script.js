let words = [];

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

document.getElementById("insertBttn").addEventListener("click", function(event2) {
    event2.preventDefault();
    let insertededWord = event2.srcElement.form[4].value;
    let o = words.push(insertededWord);
    let p = document.createElement("p");
    p.innerText = "success";
    let parrent = document.getElementById("rigth");
    parrent.appendChild(p)
});


