let dati = document.querySelector("#dati");         //
let danger = document.querySelector("#danger");     // DIV delle varie sezioni da mostrare/nascondere
let attivita = document.querySelector("#attivitaAderente"); //
let donation = document.querySelector("#donation"); //

let buttonDati = document.querySelector("#buttonDati");         //
let buttonDanger = document.querySelector("#buttonDanger");     // Button delle varie sezioni da mostrare/nascondere
let buttonAttivita = document.querySelector("#buttonAttivita"); // servono qui per cambiare il colore del bottone della sezione in cui siamo
let buttonDonation = document.querySelector("#buttonDonation"); //

function visualizzaDati(){
    if(dati.hidden == true){
        dati.hidden = false;
        //TODO stampaDati();
        danger.hidden = true;
        attivita.hidden = true;
        donation.hidden = true;

        buttonDati.style.backgroundColor = "#A6B1E1";
        buttonDanger.style.backgroundColor = "#F4EEFF";
        buttonAttivita.style.backgroundColor = "#F4EEFF";
        buttonDonation.style.backgroundColor = "#F4EEFF";
    } else {
        dati.hidden = true;
        buttonDati.style.backgroundColor = "#F4EEFF";
    }
}
function visualizzaAttivita(){
    if(attivita.hidden==true){
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = false;
        donation.hidden = true;

        buttonDati.style.backgroundColor = "#F4EEFF";
        buttonDanger.style.backgroundColor = "#F4EEFF";
        buttonAttivita.style.backgroundColor = "#A6B1E1";
        buttonDonation.style.backgroundColor = "#F4EEFF";
    } else {
        attivita.hidden = true;
        buttonAttivita.style.backgroundColor = "#F4EEFF";
    }
}
function visualizzaDanger(){
    if(danger.hidden == true){
        dati.hidden = true;
        danger.hidden = false;
        attivita.hidden = true;
        donation.hidden = true;

        buttonDati.style.backgroundColor = "#F4EEFF";
        buttonDanger.style.backgroundColor = "#A6B1E1";
        buttonAttivita.style.backgroundColor = "#F4EEFF";
        buttonDonation.style.backgroundColor = "#F4EEFF";
    } else {
        danger.hidden = true;
        buttonDanger.style.backgroundColor = "#F4EEFF";
    }
}
function visualizzaDonation(){
    if(donation.hidden == true){
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = true;
        donation.hidden = false;

        buttonDati.style.backgroundColor = "#F4EEFF";
        buttonDanger.style.backgroundColor = "#F4EEFF";
        buttonAttivita.style.backgroundColor = "#F4EEFF";
        buttonDonation.style.backgroundColor = "#A6B1E1";
    } else {
        donation.hidden = true;
        buttonDonation.style.backgroundColor = "#F4EEFF";
    }
}

function stampaDati(){
    let nome = dati.querySelector("#nome");
    let cognome = dati.querySelector("#cognome");
    let ddn = dati.querySelector("#ddn");
    let email = dati.querySelector("#email");
    let tel = dati.querySelector("#tel");
    let potere = dati.querySelector("#potere");
    let username = dati.querySelector("#username");

    nome.innerText = utente.nome;
    cognome.innerText = utente.cognome;
    ddn.innerText = utente.ddn;
    email.innerText = utente.email    //TODO vedere come accedere a questi dati
    tel.innerText = utente.tel;
    potere.innerText = utente.potere;
    username.innerText = utente.username;
}

function clickImage(attivita){
    attivita.checked = !attivita.checked; // fa si che quando viene cliccata l'immagine di un attività essa venga selezionata
}

function confermaCancellaIscrizione(){
    var txt;
    var retVal;
    if (confirm("Sei sicuro di voler cancellare la tua iscrizione a Tum4World?")) {
        txt = "Cancellazione effettuata.";
        retVal = true;
    } else {
        txt = "Cancellazione annullata.";
        retVal = false;
    }
    document.getElementById("popUp").innerHTML = txt;
    return retVal;
}

function dona(){
    let donazione = document.querySelector("#donazione"); // TODO forse è inutile, ma forse no e forse vogliamo fare i fighi con qualeche animazione BLL
    donazione.value
}

function seleziona(selezione) {
    let checkBox = document.querySelector("#" + selezione);
    let img = document.querySelector("#img"+selezione);
    let txt = document.querySelector("#img" + selezione + "> .text");
    checkBox.checked = !checkBox.checked;
    if(checkBox.checked) {
        img.style.opacity = "0.6";
        txt.style.opacity = "1";
    } else {
        img.style.opacity = "1";
        txt.style.opacity = "0";
    }
}