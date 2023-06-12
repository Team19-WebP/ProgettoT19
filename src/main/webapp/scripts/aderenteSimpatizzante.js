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

let dati = document.getElementById("dati");              //
let danger = document.getElementById("danger");          //
let attivita = document.getElementById("attivita");      // DIV delle varie sezioni da mostrare/nascondere
let donation = document.getElementById("donation");      //
let confDonation = document.getElementById("confDonaz"); //

let buttonDati = document.getElementById("buttonDati");         //
let buttonAttivita = document.getElementById("buttonAttivita"); //  bottoni per mostrare le varie sezioni
let buttonDanger = document.getElementById("buttonDanger");     //
let buttonDonation = document.getElementById("buttonDonation"); //
/** script che impedisce di fare donazioni negative */
function validaDonazione(){
    let valore = document.querySelector("#donazione").value;
    if(valore <= 0){
        alert("Inserire un importo >0!");
        return false;
    } else {
        return true;
    }
}

/** queste funzioni nascondono tutti i contenuti della pagina privata tranne quello della sezione selezionata tramite button*/
function visualizzaDati(){
    if(dati.hidden === true){
        buttonDati.className = "selezionatoPaginaPers";
        buttonDanger.className = "";
        buttonAttivita.className = "";
        if(buttonDonation !== null) {
            buttonDonation.className = "";
        }
        dati.hidden = false;
        danger.hidden = true;
        attivita.hidden = true;
        if(donation !== null) {
            donation.hidden = true;
        }
        if(confDonation !== null)
            confDonation.hidden = true;
    } else {
        buttonDati.className = "";
        dati.hidden = true;
    }
}
function visualizzaAttivita(){
    if(attivita.hidden===true){
        buttonDati.className = "";
        buttonDanger.className = "";
        buttonAttivita.className = "selezionatoPaginaPers";
        if(buttonDonation !== null) {
            buttonDonation.className = "";
        }
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = false;
        if(donation !== null) {
            donation.hidden = true;
        }
        if(confDonation !== null)
            confDonation.hidden = true;
    } else {
        buttonAttivita.className = "";
        attivita.hidden = true;
        if(confDonation !== null)
            confDonation.hidden = true;
    }
}
function visualizzaDanger(){
    if(danger.hidden === true){
        buttonDati.className = "";
        buttonDanger.className = "selezionatoPaginaPers";
        buttonAttivita.className = "";
        if(buttonDonation !== null) {
            buttonDonation.className = "";
        }
        dati.hidden = true;
        danger.hidden = false;
        attivita.hidden = true;
        if(donation !== null) {
            donation.hidden = true;
        }
        if(confDonation !== null)
            confDonation.hidden = true;
    } else {
        buttonDanger.className = "";
        danger.hidden = true;
    }
}
function visualizzaDonation(){
    if(donation.hidden === true){
        buttonDati.className = "";
        buttonDanger.className = "";
        buttonAttivita.className = "";
        buttonDonation.className = "selezionatoPaginaPers";
        dati.hidden = true;
        danger.hidden = true;
        attivita.hidden = true;
        donation.hidden = false;
        if(confDonation !== null)
            confDonation.hidden = true;
    } else {
        buttonDonation.className = "";
        donation.hidden = true;
    }
}