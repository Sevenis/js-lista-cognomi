// INIZIALIZZAZIONI VARIABILI
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var listaCognomiOrdinata = [];
var cognome;
var check = false;

// INPUT
cognome = prompt('Inserisci il tuo cognome');

// CHECK PRE ESISTENZA COGNOME NELLA LISTA
for(var i = 0; i < listaCognomi.length; i++){
    if(cognome == listaCognomi[i]){
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
    listaCognomiOrdinata.sort();
}

// STAMPA LISTA ORDINATA
for (var k = 0; k < listaCognomiOrdinata.length; k++) {
    document.getElementById('lista').innerHTML += '<li>' + listaCognomiOrdinata[k].charAt(0).toUpperCase()+listaCognomiOrdinata[k].slice(1)+ '</li>';
}
