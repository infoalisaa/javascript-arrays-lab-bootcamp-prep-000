const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name){
  kittens.push(name);
}

kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveLastKitten(){
  kittens.pop();
  
}

kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name){
  var newArray = kittens;
  return [...newArray,name];
  
}

kittens = ['Milo', 'Otis', 'Garfield']
function prependKitten(name){
  var newArray = kittens;
  return [name,...newArray];
  
}

kittens = ['Milo', 'Otis', 'Garfield']
function removeLastKitten(){
  var newArray = kittens;
  newArray.slice(0,newArray.length -1);
  return newArray;
}

kittens = ['Milo', 'Otis', 'Garfield']
function removeFirstKitten(){
  var newArray = kittens;
  newArray.slice(1);
  return newArray;
}
