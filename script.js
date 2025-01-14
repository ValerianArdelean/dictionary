let words = [];
let n = parseInt(words.length);

function searchWord() {
    let p = document.createElement("p");
    let searchedWord = document.getElementById("search").value;
    p.innerText = `The word: "${searchedWord}" is NOT present in our list`;
    if (words.includes(searchedWord)) {
        p.innerText = `The word: "${searchedWord}" is present in our list`;
    }
    document.getElementById("searchResult").appendChild(p);
};

function insertWord() {
    let p = document.createElement("p");
    let insertededWord = document.getElementById("word").value;
    p.innerText = "failed !";
    if (insertededWord != "") {
        let o = words.push(insertededWord);
        if (parseInt(o) === n + 1) {
            ++n;
            p.innerText = "success !";
        }
    }
    document.getElementById("insertResult").appendChild(p);
};



