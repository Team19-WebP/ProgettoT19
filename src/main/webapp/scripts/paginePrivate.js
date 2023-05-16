function visualizzaDati(){
    let dati = document.querySelector("#dati");
    let danger = document.querySelector("#danger");
    let attivita = document.querySelector("#attivita");
    let donation = document.querySelector("#donation");

    dati.hidden = false;
    danger.hidden = true;
    attivita.hidden = true;
    donation.hidden = true;
}

function visualizzaAttivita(){
    let dati = document.querySelector("#dati");
    let danger = document.querySelector("#danger");
    let attivita = document.querySelector("#attivita");
    let donation = document.querySelector("#donation");

    dati.hidden = true;
    danger.hidden = true;
    attivita.hidden = false;
    donation.hidden = true;
}

function visualizzaDanger(){
    let dati = document.querySelector("#dati");
    let danger = document.querySelector("#danger");
    let attivita = document.querySelector("#attivita");
    let donation = document.querySelector("#donation");

    dati.hidden = true;
    danger.hidden = false;
    attivita.hidden = true;
    donation.hidden = true;
}

function visualizzaDonation(){
    let dati = document.querySelector("#dati");
    let danger = document.querySelector("#danger");
    let attivita = document.querySelector("#attivita");
    let donation = document.querySelector("#donation");

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
    let donazione = document.querySelector("#donazione"); // forse è inutile, ma forse no
    donazione.value
}