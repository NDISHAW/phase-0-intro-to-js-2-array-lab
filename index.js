// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
console.log(cats);

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    console.log(cats);
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
    console.log(cats);
}
// destructivelyRemoveLastCat();
function  destructivelyRemoveFirstCat(name) {
    cats.shift();
    console.log(cats);
}
function appendCat(name){
    const copyofCats=[...cats,"Broom"]
    return copyofCats;
}
appendCat();

function prependCat(name){
    const copyOfCats=["Arnold", ...cats];
    return copyOfCats;
}
prependCat();

function removeLastCat(name){
    const kanyau=[...cats];
    kanyau.pop();
    return kanyau;
    
}
removeLastCat();

function removeFirstCat(name){
    const kamiau=[...cats];
    kamiau.shift();
    return kamiau;
}
removeFirstCat();
console.log(kamiau);