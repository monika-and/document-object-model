'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);



console.log(pierwszyDiv.childNodes); //wszystkie wezly (wszystkie możliwe elementy)

console.log(pierwszyDiv.children); //tylko elementy HTML

console.log(pierwszyDiv.childNodes[3]); 

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);



var pierwszyChild = pierwszyDiv.childNodes[2];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling.nodeType); //na podstawie zwroconego numeru wiemy jakiego typu jest wezel - z listy
