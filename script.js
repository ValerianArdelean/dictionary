let words = [];

function searchWord() {
    let p = document.createElement("p");
    let searchedWord = document.getElementById("search");
    p.innerText = `The word: "${searchedWord.value}" isn't present in our list`;
    if (words.includes(searchedWord.value)) {
        p.innerText = `The word "${searchedWord.value}" is present in our list`;
    }
    document.getElementById("searchResult").appendChild(p);
};

function insertWord() {
    let p = document.createElement("p");
	p.innerText = "Failed !";
    let insertedWord = document.getElementById("word");
    if (insertedWord.value != "") {
        words.push(insertedWord.value);
		p.innerText = `The word "${insertedWord.value}" has been successfully inserted!`;
    }
    document.getElementById("insertResult").appendChild(p);
};
