let words = [];
let n = parseInt(words.length);

function searchWord() {
    let p = document.createElement("p");
    let searchedWord = document.getElementById("search");
    p.innerText = `The word: "${searchedWord.value}" isn't present in our list`;
    if (words.includes(searchedWord.value)) {
        p.innerText = `The word "${searchedWord.value}" is present in our list`;
    }
    document.getElementById("searchResult").appendChild(p);
	searchedWord.value = '';
};

function insertWord() {
    let p = document.createElement("p");
	p.innerText = "Failed !";
    let insertededWord = document.getElementById("word");
    if (insertededWord.value != "") {
        let o = words.push(insertededWord.value);
        if (parseInt(o) === n + 1) {
            ++n;
            p.innerText = `The word "${insertededWord.value}" has been successfully inserted!`;
        }
    }
    document.getElementById("insertResult").appendChild(p);
	insertededWord.value = '';
};



