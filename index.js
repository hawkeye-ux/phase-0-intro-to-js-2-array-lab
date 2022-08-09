// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    let catsNewArray =  [...cats, name];
    return catsNewArray;
}

function prependCat(name) {
    let catsNewArray =  [name, ...cats];
    return catsNewArray;
}

function removeLastCat() {
    let catsNewArray = cats.slice(0, -1);
    return catsNewArray;
}

function removeFirstCat() {
    let catsNewArray = cats.slice(1);
    return catsNewArray;
}