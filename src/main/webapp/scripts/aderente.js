let dati = document.querySelector("#dati");         //
let danger = document.querySelector("#danger");     // DIV delle varie sezioni da mostrare/nascondere
let attivita = document.querySelector("#attivita"); //
let donation = document.querySelector("#donation"); //

let buttonDati = document.querySelector("#buttonDati");         //
let buttonDanger = document.querySelector("#buttonDanger");     // Button delle varie sezioni da mostrare/nascondere
let buttonAttivita = document.querySelector("#buttonAttivita"); // servono qui per cambiare il colore del bottone della sezione in cui siamo
let buttonDonation = document.querySelector("#buttonDonation"); //

function visualizzaDati(){
    dati.hidden = false;
    //TODO stampaDati();
    danger.hidden = true;
    attivita.hidden = true;
    donation.hidden = true;


    buttonDati.style.backgroundColor = "#A6B1E1";
    buttonDanger.style.backgroundColor = "#F4EEFF";
    buttonAttivita.style.backgroundColor = "#F4EEFF";
    buttonDonation.style.backgroundColor = "#F4EEFF";
}

function visualizzaAttivita(){
    dati.hidden = true;
    danger.hidden = true;
    attivita.hidden = false;
    donation.hidden = true;


    buttonDati.style.backgroundColor = "#F4EEFF";
    buttonDanger.style.backgroundColor = "#F4EEFF";
    buttonAttivita.style.backgroundColor = "#A6B1E1";
    buttonDonation.style.backgroundColor = "#F4EEFF";
}

function visualizzaDanger(){
    dati.hidden = true;
    danger.hidden = false;
    attivita.hidden = true;
    donation.hidden = true;


    buttonDati.style.backgroundColor = "#F4EEFF";
    buttonDanger.style.backgroundColor = "#A6B1E1";
    buttonAttivita.style.backgroundColor = "#F4EEFF";
    buttonDonation.style.backgroundColor = "#F4EEFF";
}

function logout(){
    let xht = new XMLHttpRequest();
    xht.onreadystatechange = function()  {
        if(this.readyState == 4 && this.status == 200) {
            document.location.href = "home.jsp";
            window.alert("Logout effettuato con successo!");
        }
    }
    xht.open("POST", "/progettoteam19/ServletLogout", true);
    xht.send();
}

function visualizzaDonation(){
    dati.hidden = true;
    danger.hidden = true;
    attivita.hidden = true;
    donation.hidden = false;


    buttonDati.style.backgroundColor = "#F4EEFF";
    buttonDanger.style.backgroundColor = "#F4EEFF";
    buttonAttivita.style.backgroundColor = "#F4EEFF";
    buttonDonation.style.backgroundColor = "#A6B1E1";
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
    //--TODO qualcosa tipo pop up che chieda la conferma e se dici si return true altrimenti false
}

function dona(){
    let donazione = document.querySelector("#donazione"); // TODO forse è inutile, ma forse no e forse vogliamo fare i fighi con qualeche animazione BLL
    donazione.value
}