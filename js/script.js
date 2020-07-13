// INIZIALIZZAZIONI VARIABILI
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var listaCognomiOrdinata = [];
var cognome;
var check = false;
var indiceReale = 0;

// INPUT
cognome = prompt('Inserisci il tuo cognome');

// CHECK PRE ESISTENZA COGNOME NELLA LISTA
for(var i = 0; i < listaCognomi.length; i++){
    if(cognome.toLowerCase() == listaCognomi[i].toLowerCase()){
        check=true;
    }
}

// RISOLUZIONE CHECK (Alert OR PUSH)
if(check == true){
    alert("Cognome già esistente!")
} else {
    listaCognomi.push(cognome);
}

// ORDINAMENTO LISTA
for (var j = 0; j < listaCognomi.length; j++){
    listaCognomiOrdinata.push(listaCognomi[j].toLowerCase());
}
listaCognomiOrdinata.sort();

// STAMPA LISTA ORDINATA
for (var k = 0; k < listaCognomiOrdinata.length; k++) {
    document.getElementById('lista').innerHTML += '<li>' + listaCognomiOrdinata[k].charAt(0).toUpperCase()+listaCognomiOrdinata[k].slice(1)+ '</li>';
}

// CHECK POSIZIONE "UMANA" COGNOME - OPZIONE 1
// for (var indice = 0; indice < listaCognomiOrdinata.length; indice ++){
//     if (listaCognomiOrdinata[indice] == cognome.toLowerCase()){
//         indiceReale = indice + 1;
//     }
// }

// CHECK POSIZIONE "UMANA" COGNOME - OPZIONE 2

indiceReale = listaCognomiOrdinata.indexOf(cognome.toLowerCase())+1;
document.getElementById('indice-reale').innerHTML = 'La sua posizione reale nell\'array è: ' + indiceReale;
