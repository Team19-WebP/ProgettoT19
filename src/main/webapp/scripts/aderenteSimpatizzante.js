/**
    seleziona:
        permette di selezionare l'attività sia premendo l'immagine che la checkbox
        - selezione è una stringa per selezionare l'elemento dell'attività ('attivita1', 'attivita2', 'attivita3')
        - immagine è un bool che indica se il click viene dall'immagine o dalla checkbox
 */
function seleziona(selezione, immagine){
    let checkBox = document.querySelector("#" + selezione);
    let img = document.querySelector("#img"+selezione);
    let txt = document.querySelector("#img" + selezione + "> .textAttivita");
    if(immagine) checkBox.checked = !checkBox.checked;
    if(checkBox.checked) {
        img.style.opacity = "0.6";
        txt.style.opacity = "1";
    } else {
        img.style.opacity = "1";
        txt.style.opacity = "0";
    }
}

/** crea un popUp che chiede se si è sicuri di voler eliminare l'account */
function confermaCancellaIscrizione(){
    let txt;
    let retVal;
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