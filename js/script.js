var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var listaCognomiOrdinata = [];
var cognome;
var check=false;

cognome = prompt('Inserisci il tuo cognome');
console.log(cognome);

for(i=0; i<listaCognomi.length; i++){
    if(cognome == listaCognomi[i]){
        check=true;
    }
}
console.log(check);
if(check==true){
    alert("Cognome già esistente!")
} else {
    listaCognomi.push(cognome);
}

for (var j=0; j<listaCognomi.length; j++){
    listaCognomiOrdinata.push(listaCognomi[j].toLowerCase());
    listaCognomiOrdinata.sort();
}

for (var k=0; k<listaCognomiOrdinata.length; k++) {
    document.getElementById('lista').innerHTML += '<li>' + listaCognomiOrdinata[k].charAt(0).toUpperCase()+listaCognomiOrdinata[k].slice(1)+ '</li>';
}
