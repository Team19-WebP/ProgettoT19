let dati = document.querySelector("#dati");         //
let danger = document.querySelector("#danger");     // DIV delle varie sezioni da mostrare/nascondere
let attivita = document.querySelector("#attivita"); //

function visualizzaDati(){
    if(dati.hidden === true){
        dati.hidden = false;
        danger.hidden = true;
        attivita.hidden = true;
    } else {
        dati.hidden = true;
    }
}

function visualizzaAttivita(){
    if(attivita.hidden === true){
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = false;
    } else {
        attivita.hidden = true;
    }
}

function visualizzaDanger(){
    if(danger.hidden === true){
        dati.hidden = true;
        danger.hidden = false;
        attivita.hidden = true;
    } else {
        danger.hidden = true;
    }
}

