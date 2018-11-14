const anaWords = {}

words.forEach (word => {
    let alphaWordOne = alphabetize(word)

    if (!anaWords[alphaWordOne]) {
        anaWords[alphaWordOne] = []
        anaWords[alphaWordOne].push(word)
    }
    else {
        anaWords[alphaWordOne].push(word)
    }
})

for (let key in anaWords) {
    if (anaWords[key].length < 5) continue

    display ('', 'p', 'ans')
    document.getElementById('ans').lastChild.id = key

    anaWords[key].forEach (x => {
        display (`${x} `, 'span', key)
    })
}

function alphabetize(a) {  
    return  a.toLowerCase().split("").sort().join("").trim();  
}

function display (value, element, id) {
    // creates p element and adds x to it 
    var newElement = document.createElement(element);
    var newText = document.createTextNode(value);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById(id);
    destination.appendChild(newElement);
}