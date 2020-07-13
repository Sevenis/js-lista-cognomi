var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var listaCognomiOrdinata = [];
var cognome;

listaCognomi.push(prompt('Inserisci il tuo cognome'));

for (var i=0; i<listaCognomi.length; i++){
    listaCognomiOrdinata.push(listaCognomi[i]);
    listaCognomiOrdinata.sort();
}
console.log(listaCognomiOrdinata);
