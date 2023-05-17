let utenti = document.querySelector("#utenti");
let simpatizzanti = document.querySelector("#simpatizzanti");
let aderenti = document.querySelector("#aderenti");
let visite = document.querySelector("#visite");
let donations = document.querySelector("#donations");

function visualizzaUtenti(){
    utenti.hidden = false;
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = true;
}

function visualizzaSimpatizzanti(){
    utenti.hidden = true;
    simpatizzanti.hidden = false;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = true;
}

function visualizzaAderenti(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = false;
    visite.hidden = true;
    donations.hidden = true;
}

function visualizzaVisite(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = false;
    donations.hidden = true;
}
function visualizzaDonations(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = false;
}

function showOrHide(id){
    let idDati = "#info"+id;
    let dati = document.querySelector(idDati);

    dati.hidden = !dati.hidden;

}