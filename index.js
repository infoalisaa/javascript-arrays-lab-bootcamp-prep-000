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
  
  
}
kittens = ['Milo', 'Otis', 'Garfield']

kittens = ['Milo', 'Otis', 'Garfield']
function removeLastKitten(){
  var newArray = kittens;
  kittens.slice(0,newArray.length -1);
  return newArray;
}

kittens = ['Milo', 'Otis', 'Garfield']
function removeFirstKitten(){
  var newArray = kittens;
  kittens.slice(1);
  return newArray;
}
