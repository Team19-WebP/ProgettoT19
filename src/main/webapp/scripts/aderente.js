let dati = document.querySelector("#dati");                 //
let danger = document.querySelector("#danger");             // DIV delle varie sezioni da mostrare/nascondere
let attivita = document.querySelector("#attivitaAderente"); //
let donation = document.querySelector("#donation");         //
let confDonation = document.querySelector("#confDonaz");

/*TODO fissare il bottone cliccato con gli id [anche in simp e amm]*/

function validaDonazione(){ //script che impedisce di fare donazioni negative
    let valore = document.querySelector("#donazione").value;
    if(valore <= 0){
        alert("Inserire un importo >0!");
        return false;
    } else {
        return true;
    }
}
function visualizzaDati(){
    if(dati.hidden === true){
        dati.hidden = false;
       danger.hidden = true;
        attivita.hidden = true;
        donation.hidden = true;
        if(confDonation !== null)
            confDonation.hidden = true;

    } else {
        dati.hidden = true;
    }
}
function visualizzaAttivita(){
    if(attivita.hidden===true){
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = false;
        donation.hidden = true;
        if(confDonation !== null)
            confDonation.hidden = true;

    } else {
        attivita.hidden = true;
        if(confDonation !== null)
            confDonation.hidden = true;

    }
}
function visualizzaDanger(){
    if(danger.hidden === true){
        dati.hidden = true;
        danger.hidden = false;
        attivita.hidden = true;
        donation.hidden = true;
        if(confDonation !== null)
            confDonation.hidden = true;

    } else {
        danger.hidden = true;
    }
}
function visualizzaDonation(){
    if(donation.hidden === true){
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = true;
        donation.hidden = false;
        if(confDonation !== null)
            confDonation.hidden = true;

    } else {
        donation.hidden = true;
    }
}
