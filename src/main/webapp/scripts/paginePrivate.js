let dati = document.querySelector("#dati");
let danger = document.querySelector("#danger");
let attivita = document.querySelector("#attivita");
let donation = document.querySelector("#donation");

function visualizzaDati(){
    dati.hidden = false;
    danger.hidden = true;
    attivita.hidden = true;
    donation.hidden = true;
}

function visualizzaAttivita(){
    dati.hidden = true;
    danger.hidden = true;
    attivita.hidden = false;
    donation.hidden = true;
}

function visualizzaDanger(){
    dati.hidden = true;
    danger.hidden = false;
    attivita.hidden = true;
    donation.hidden = true;
}

function visualizzaDonation(){
    dati.hidden = true;
    danger.hidden = true;
    attivita.hidden = true;
    donation.hidden = false;
}

function clickImage(attivita){
    attivita.checked = !attivita.checked; // fa si che quando viene cliccata l'immagine di un attività essa venga selezionata
}

function confermaCancellaIscrizione(){
    //--TODO qualcosa tipo pop up che chieda la conferma e se dici si return true altrimenti false
}

function dona(){
    let donazione = document.querySelector("#donazione"); // TODO forse è inutile, ma forse no e forse vogliamo fare i fighi con qualeche animazione BLL
    donazione.value
}