let dati = document.querySelector("#dati");         //
let danger = document.querySelector("#danger");     // DIV delle varie sezioni da mostrare/nascondere
let attivita = document.querySelector("#attivita"); //
let defDiv = document.querySelector("#default");    //

let buttonDati = document.querySelector("#buttonDati");         //
let buttonDanger = document.querySelector("#buttonDanger");     // Button delle varie sezioni da mostrare/nascondere
let buttonAttivita = document.querySelector("#buttonAttivita"); // servono qui per cambiare il colore del bottone della sezione in cui siamo

function visualizzaDati(){
    if(dati.hidden == true){
        dati.hidden = false;
        //TODO stampaDati();
        danger.hidden = true;
        attivita.hidden = true;
        defDiv.hidden = true;

        buttonDati.style.backgroundColor = "#A6B1E1";
        buttonDanger.style.backgroundColor = "#F4EEFF";
        buttonAttivita.style.backgroundColor = "#F4EEFF";
    } else {
        dati.hidden = true;
        buttonDati.style.backgroundColor = "#F4EEFF";
        defDiv.hidden = false;

    }
}

function visualizzaAttivita(){
    if(attivita.hidden == true){
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = false;
        defDiv.hidden = true;

        buttonDati.style.backgroundColor = "#F4EEFF";
        buttonDanger.style.backgroundColor = "#F4EEFF";
        buttonAttivita.style.backgroundColor = "#A6B1E1";
    } else {
        attivita.hidden = true;
        buttonAttivita.style.backgroundColor = "#F4EEFF";
        defDiv.hidden = false;
    }
}

function visualizzaDanger(){
    if(danger.hidden == true){
        dati.hidden = true;
        danger.hidden = false;
        attivita.hidden = true;
        defDiv.hidden = true;

        buttonDati.style.backgroundColor = "#F4EEFF";
        buttonDanger.style.backgroundColor = "#A6B1E1";
        buttonAttivita.style.backgroundColor = "#F4EEFF";
    } else {
        danger.hidden = true;
        buttonDanger.style.backgroundColor = "#F4EEFF";
        defDiv.hidden = false;
    }
}

function seleziona(selezione){
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
