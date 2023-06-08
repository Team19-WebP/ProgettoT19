let dati = document.querySelector("#dati");         //
let danger = document.querySelector("#danger");     // DIV delle varie sezioni da mostrare/nascondere
let attivita = document.querySelector("#attivita"); //
let defDiv = document.querySelector("#default");    //


function visualizzaDati(){
    if(dati.hidden == true){
        dati.hidden = false;
        danger.hidden = true;
        attivita.hidden = true;
        defDiv.hidden = true;
    } else {
        dati.hidden = true;
        defDiv.hidden = false;
    }
}

function visualizzaAttivita(){
    if(attivita.hidden == true){
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = false;
        defDiv.hidden = true;
    } else {
        attivita.hidden = true;
        defDiv.hidden = false;
    }
}

function visualizzaDanger(){
    if(danger.hidden == true){
        dati.hidden = true;
        danger.hidden = false;
        attivita.hidden = true;
        defDiv.hidden = true;
    } else {
        danger.hidden = true;
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
