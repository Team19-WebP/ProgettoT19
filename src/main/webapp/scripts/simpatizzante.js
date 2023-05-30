let dati = document.querySelector("#dati");         //
let danger = document.querySelector("#danger");     // DIV delle varie sezioni da mostrare/nascondere
let attivita = document.querySelector("#attivita"); //

let buttonDati = document.querySelector("#buttonDati");         //
let buttonDanger = document.querySelector("#buttonDanger");     // Button delle varie sezioni da mostrare/nascondere
let buttonAttivita = document.querySelector("#buttonAttivita"); // servono qui per cambiare il colore del bottone della sezione in cui siamo

let defaultDiv = document.getElementById("default");
function visualizzaDati(){
    if(dati.hidden == true){
        dati.hidden = false;
        //TODO stampaDati();
        danger.hidden = true;
        attivita.hidden = true;
        defaultDiv.hidden = true;

        buttonDati.style.backgroundColor = "#A6B1E1";
        buttonDanger.style.backgroundColor = "#F4EEFF";
        buttonAttivita.style.backgroundColor = "#F4EEFF";
    } else {
        defaultDiv.hidden = false;
        dati.hidden = true;
        buttonDati.style.backgroundColor = "#F4EEFF";
    }
}

function visualizzaAttivita(){
    if(attivita.hidden == true){
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = false;
        defaultDiv.hidden = true;

        buttonDati.style.backgroundColor = "#F4EEFF";
        buttonDanger.style.backgroundColor = "#F4EEFF";
        buttonAttivita.style.backgroundColor = "#A6B1E1";
    } else {
        defaultDiv.hidden = false;
        attivita.hidden = true;
        buttonAttivita.style.backgroundColor = "#F4EEFF";
    }
}

function visualizzaDanger(){
    if(danger.hidden == true){
        dati.hidden = true;
        danger.hidden = false;
        attivita.hidden = true;
        defaultDiv.hidden = true;

        buttonDati.style.backgroundColor = "#F4EEFF";
        buttonDanger.style.backgroundColor = "#A6B1E1";
        buttonAttivita.style.backgroundColor = "#F4EEFF";
    } else {
        defaultDiv.hidden = false;
        danger.hidden = true;
        buttonDanger.style.backgroundColor = "#F4EEFF";
    }
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
