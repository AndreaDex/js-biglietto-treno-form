
//Generare il biglietto con i dati inseriti ed il prezzo calcolato
// Elementi HTML Biglietto
var nomePassegeroEl = document.getElementById("nome_passeggero");
var PromoEl = document.getElementById("promo");
var carrozzaEl = document.getElementById("carrozza");
var codiceEl = document.getElementById("codice");
var costoEl = document.getElementById("costo")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

/**
 * #Genera il biglietto con i dati inseriti dall'utente
 */
function generaIlBiglietto() {
    //Prendere nome e stamparlo
    var nomeCognomeInput = document.getElementById("nome_cognome").value;
    nomePassegeroEl.innerHTML= nomeCognomeInput;
    
    //Prendere distanza
    var distanzaInput = document.getElementById("distanza").value;
    
    //Calcolare prezzo
    var prezzoStandard = distanzaInput * 0.21;
    console.log(prezzoStandard);
    var prezzoMinori =  prezzoStandard - ((prezzoStandard / 100) *20);
    var prezzoOver65 = prezzoStandard - ((prezzoStandard / 100) *40);
    
    //Prendere età e stampare tipo di offerta correlata
    var etàInput = document.getElementById("fascia_eta").value;
   
    PromoEl.innerHTML = etàInput;
    //Stampare costo biglietto in base ad offerta correlata
    if (etàInput === "Minorenne"){
        costoEl.innerHTML = prezzoMinori.toFixed(2) + "€";
    } else if (etàInput === "Over 65") {
        costoEl.innerHTML = prezzoOver65.toFixed(2) + "€";
    } else {
        costoEl.innerHTML = prezzoStandard.toFixed(2) + "€";
    }

    //Stampare Numero Treno e carrozza
    codiceEl.innerHTML = getRndInteger(90000, 100000);
    carrozzaEl.innerHTML =  getRndInteger(1, 11);
     
}

/**
 * #Resetta il form
 */
function resetFrom() {
    var nomeCognomeInput = document.getElementById("nome_cognome").value = "";
    var distanzaInput = document.getElementById("distanza").value = "";
    var etàInput = document.getElementById("fascia_eta").value = "";
}