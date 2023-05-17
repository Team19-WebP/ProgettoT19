let utenti = document.querySelector("#utenti");                 //
let simpatizzanti = document.querySelector("#simpatizzanti");   //
let aderenti = document.querySelector("#aderenti");             // DIV delle varie sezioni da mostrare/nascondere
let visite = document.querySelector("#visite");                 //
let donations = document.querySelector("#donations");           //

let buttonUtenti = document.querySelector("#buttonUtenti");                 //
let buttonSimpatizzanti = document.querySelector("#buttonSimpatizzanti");   //
let buttonAderenti = document.querySelector("#buttonAderenti");             // Button delle varie sezioni da mostrare/nascondere
let buttonVisite = document.querySelector("#buttonVisite");                 // servono qui per cambiare il colore del bottone della sezione in cui siamo
let buttonDonations = document.querySelector("#buttonDonations");           //
function visualizzaUtenti(){
    utenti.hidden = false;
    stampaUtenti();
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = true;


    buttonUtenti.style.backgroundColor = "#A6B1E1";
    buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    buttonAderenti.style.backgroundColor = "#F4EEFF";
    buttonVisite.style.backgroundColor = "#F4EEFF";
    buttonDonations.style.backgroundColor = "#F4EEFF";
}

function visualizzaSimpatizzanti(){
    utenti.hidden = true;
    simpatizzanti.hidden = false;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = true;


    buttonUtenti.style.backgroundColor = "#F4EEFF";
    buttonSimpatizzanti.style.backgroundColor = "#A6B1E1";
    buttonAderenti.style.backgroundColor = "#F4EEFF";
    buttonVisite.style.backgroundColor = "#F4EEFF";
    buttonDonations.style.backgroundColor = "#F4EEFF";
}

function visualizzaAderenti(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = false;
    visite.hidden = true;
    donations.hidden = true;


    buttonUtenti.style.backgroundColor = "#F4EEFF";
    buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    buttonAderenti.style.backgroundColor = "#A6B1E1";
    buttonVisite.style.backgroundColor = "#F4EEFF";
    buttonDonations.style.backgroundColor = "#F4EEFF";
}

function visualizzaVisite(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = false;
    donations.hidden = true;


    buttonUtenti.style.backgroundColor = "#F4EEFF";
    buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    buttonAderenti.style.backgroundColor = "#F4EEFF";
    buttonVisite.style.backgroundColor = "#A6B1E1";
    buttonDonations.style.backgroundColor = "#F4EEFF";
}
function visualizzaDonations(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = false;


    buttonUtenti.style.backgroundColor = "#F4EEFF";
    buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    buttonAderenti.style.backgroundColor = "#F4EEFF";
    buttonVisite.style.backgroundColor = "#F4EEFF";
    buttonDonations.style.backgroundColor = "#A6B1E1";
}

function showOrHide(id){
    let idDati = "#info"+id;
    let dati = document.querySelector(idDati);

    dati.hidden = !dati.hidden;

}
function stampaUtenti(){  //TODO faccio la stessa cosa per aderenti e simpatizzanti
    //TODO passo alla servlet che accede al DB e mi mette in un BEAN tutti i dati(pubblici) di tutti gli utenti e poi devo in qualche modo aggiungerli tipo:
    //
    // let utenti = document.querySelector("#utenti");
    // for(utente in BEAN){
    //    counterUtenti++
    //    let idUtente = "Utente"+counterUtenti;
    //    let idInfoUtente = "info"+idUtente;
    //    utenti.content += "<div onclick=\"showOrHide(this.id);\" id=\""+idUtente+"\">"+utente.name+"</div>
    //                         <div id=\""+idInfoUtente+"\" hidden=\"true\">
    //                          <p> DATI UTENTE PRESI DAL BEAN </p>
    //                          </div>"
    // }
}