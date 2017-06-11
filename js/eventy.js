'use strict';

//var secondLink = document.getElementsByTagName('a')[1];
//console.log(secondLink);
//
//function alarm(e){
// e.preventDefault(); //zapobiegamy domyślnej akcji
// console.log('kliknięto kolejny link');
//    
// console.log(e.type);
//    
//}
//
//secondLink.onclick = alarm; //wywołujemy funkcję alarm() na drugim linku po kliknięciu
//
//
//var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienna z trzecim linkiem
//
//thirdLink.addEventListener('click', alarm); //wywołujemy funkcję alarm() na trzecim linku po kliknieciu za pomoca event listenera
//
//thirdLink.removeEventListener('click', alarm);

//var mainHeader = document.getElementById('main-header');
//
//function resize(e) { //przekazujemy zdarzenia jako parametr funkcji
//    
//  //  console.log(e.type);
//    
//    if (e.type =='mouseover') { //sprawdzanie typu zdarzenia
//        mainHeader.style.fontSize = "70px";
//} else {
//    mainHeader.style.fontSize = "inherit";
//    }
//}
//
//mainHeader.onmouseover = resize; //wywołanie funkcji resize po najechaniu myszką na nagłówek
//mainHeader.onmouseout = resize; //wywołanie funkcji resize po zjechaniu myszką na nagłówek



/* zatrzymanie propagacji - po kliknięciu w nagłówek console.log...wywołą się dwa razy - dodajemy zatrzymanie propagacji i alarm wywołuje się raz */

function klikHeader() {
    
    console.log('kliknąłeś w header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader; //wywołąj tę funkcję na elem header


function klikH1(e) {
     e.stopPropagation();
    console.log("kliknąłeś w H1");
    
}


document.getElementsByTagName('h1')[0].onclick = klikH1; //wywołąj funkcję na elem h1