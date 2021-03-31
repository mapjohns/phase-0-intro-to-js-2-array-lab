// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
let newCatArray

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(list) {
    cats.splice(-1,1)
    return console.log(cats)
}

function destructivelyRemoveFirstCat(list) {
    return cats.shift()
}

function appendCat(name) {
    return newCatArray = [...cats, name]
}

function prependCat(name) {
    return newCatArray = [name, ...cats]
}

function removeLastCat(array) {
    return newCatArray = cats.slice(0,-1)
}

function removeFirstCat(array) {
    return newCatArray = cats.slice(1)
}

removeLastCat(cats)
console.log(newCatArray)