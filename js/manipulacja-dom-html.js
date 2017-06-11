'use strict';

var mainHeader = document.getElementById('main-header'); //przypisujemy nagłówek strony do zmiennej
console.log(mainHeader);

mainHeader.innerHTML = "Treść nagłówka"; //dodajemy treść do nagłówka

var link = document.getElementsByClassName('link')[0]; //przypisujemy link do zmiennej
console.log(link);

link.href = "http://akademia108.pl"; //nadpisujemy atrybut href w linki

link.className = "nowa-klasa"; //nadpisujemy nazwę klasy w linku
mainHeader.style.color = "#11aa22"; //dodajemy style nagłówka

link.text = "ddd";