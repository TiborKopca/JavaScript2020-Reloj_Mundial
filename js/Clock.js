/*
Crear un App Web: Reloj Mundial
(Adjunto un Mockup)
En el mockup, tenéis lo mínimo que quiero que haga esta app, que es mantener la hora de cinco países.
También se lleva una cuenta de la diferencia horaria, teniendo de base la primera que es (Madrid).

Lo más importante es que salga bien la lógica. Que funcione.
Os sugiero enfocaros, desde lo principal hacia los detalles.

El Mockup, como podéis ver lo enfoca a un entorno móvil.
Si os da tiempo, perfeccionar esa idea, pero lo principal es el código de Javascript y que un usuario, pueda ver como funciona.

Al final, hay un botón (cruz a la derecha).
Donde podéis integrar más países que esos cinco.

*** Muy importante, terminar procesos. No me dejéis la app que no haga nada bien. Importante terminar procesos.
** El tiempo termina a la 13:00, si alguien entrega después desea hora no puntuaré su examen.
* El examen se entrega, como una tarea, con el enlace a GitHub.

2020 @ Tibor Kopca
*/
'use strict'
//VARIABLES
var localday, divReloj, ayer, manana, hoy, fullDate;

//MAIN 
window.onload = function () {
    clock();                       //llamamos funcion reloj
}
 //DIGITAL HOUR CLOCK 
function clock() {                          
    fullDate = new Date();

    var hh = zeroToTime(fullDate.getHours());          
    var mm = zeroToTime(fullDate.getMinutes());
    var ss = zeroToTime(fullDate.getSeconds());
    var hh1Menos = zeroToTime(correctTime(fullDate.getHours() - 1));   //menos 1 hora
    var hh8Mas = zeroToTime(correctTime(fullDate.getHours() + 8));      //mas 8 horas
    var hh9Menos = zeroToTime(correctTime(fullDate.getHours() - 9));   //menos 9 horas
    var hh6Menos = zeroToTime(correctTime(fullDate.getHours() - 6));   //menos 6 horas

    let relojMadrid = document.getElementById('relojMadrid');
    relojMadrid.innerHTML = `${hh}:${mm}:${ss}`;    //pasamos dentro un elemento creado previamente el valor
    let detailsMadrid = document.getElementById('detailsMadrid');
    detailsMadrid.innerHTML = dayStatus(hh);

    let relojLondres = document.getElementById('relojLondres');
    relojLondres.innerHTML = `${hh1Menos}:${mm}:${ss}`;
    let detailsLondon = document.getElementById('detailsLondres');
    detailsLondon.innerHTML = dayStatus(hh1Menos);

    let relojSydney = document.getElementById('relojSydney');
    relojSydney.innerHTML = `${hh8Mas}:${mm}:${ss}`;
    let detailsSydney = document.getElementById('detailsSydney');
    detailsSydney.innerHTML = dayStatus(hh8Mas);

    let relojLA = document.getElementById('relojLA');
    relojLA.innerHTML = `${hh9Menos}:${mm}:${ss}`;
    let detailsLA = document.getElementById('detailsLA');
    detailsLA.innerHTML = dayStatus(hh9Menos);

    let relojNY = document.getElementById('relojNY');
    relojNY.innerHTML = `${hh6Menos}:${mm}:${ss}`;
    let detailsNY = document.getElementById('detailsNY');
    detailsNY.innerHTML = dayStatus(hh6Menos);

    setTimeout('clock()', 500);  //500ms == 0.5s        //llamamos la misma funcion de nuevo y de nuevo
}

function zeroToTime(i) {         //anade un '0' si el numero de tiempo es menor de 10
    if (i < 10) {
        i = '0' + i;
        // console.log("zero to time " + i)
    } return i;
}
function correctTime(i) {                       //if there is hour with more than 24, we correct it
    if (i > 24) {
        console.log("time - 12 = " + i)         
        i = i - 12;
    } else if (i < 0) {                         //if there is hour with negative time
        i = i + 12;
    } return i;
}

function dayStatus(localday) {
    if (localday > fullDate.getHours() + 12) {
        console.log("manana");
        return 'manana';
    } else if (localday < fullDate.getHours() - 12) {
        console.log("ayer");
        return 'ayer';
    } else {
        let now = (localday - fullDate.getHours());           // + or - to the hour
        now = now > 0 ? "+" + now : now;                      //if there is negative hour relative to ours '-' is not needed
        return `Hoy, ${now}H`;
    }
}