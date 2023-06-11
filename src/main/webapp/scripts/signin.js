let ageAlert = document.querySelector("#ageAlert");
let emailAlert = document.querySelector("#emailAlert");
let passAlert = document.querySelector("#passAlert");
let confPassAlert = document.querySelector("#confPassAlert");

const regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.{1}[a-zA-Z0-9]+$/;
const regexPass = /^(?=.*[Ee])(?=.*[Gg])(?=.*[Ff])(?=.*[A-Za-z])(?=.*\d)(?=.*[$!?\S]).{7,}$/;
const regexNumero = /^([+]?)([0-9]{9,12})$/;

let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let datadinascita = document.querySelector("#datadinascita");
let email = document.querySelector("#email");
let telefono = document.querySelector("#telefono");
let username = document.querySelector("#username");
let passwordVal = document.querySelector("#passwordVal");
let confpassword = document.querySelector("#confpassword");


function validaForm(event) {
    /*Senza manda il submit anche se non è validato*/
    // event.preventDefault();
    /*restto i messaggi di errore*/
    resetForm();
    /*metto dentro un array tutti i campi obbligatori*/
    let requiredElements = document.querySelectorAll(".inputAndLabel input[type='text'], .inputAndLabel input[type='date'], .inputAndLabel input[type='password']");
    /*setto il valore da ritornare su valido*/
    let valido = true;
    /*faccio il controllo su tutti gli elementi obbligatori*/
    requiredElements.forEach(function (element) {
        /*DEBUG*/
        console.log("Controllando " + element.name);
        /*DEBUG*/
        /*se il campo è vuoto*/
        if (element.value === "") {
            /*facilito la userEXP rimandando il focus e lo screen sul campo mancante
            * evidenziando di rosso il bordo e aggiungendo un messaggio di errore sotto
            * il campo
            * */
            element.focus();
            element.scrollIntoView({ behavior: "smooth", block: "center"});
            element.style.borderColor = "#FF0000";
            const messaggioErrore = document.createElement("span");
            messaggioErrore.className = "errore";
            messaggioErrore.textContent = "Questo campo è obbligatorio!";
            messaggioErrore.style.fontSize = "x-small";
            messaggioErrore.style.color = "#FF0000";
            element.parentNode.appendChild(messaggioErrore);
            /*invalido la submit*/
            valido = false;
        } else {
            element.style.borderColor = "#000000";
        }
    });
    let nowDate = new Date();  // data di ora
    let dataInserita = document.querySelector("#datadinascita");
    let email = document.querySelector("#email");
    let passwordVal = document.querySelector("#passwordVal");
    let confpassword = document.querySelector("#confpassword");
    let dataNascita = new Date(dataInserita.value);
    let numero = document.querySelector("#telefono");
    if (
        nowDate.getFullYear() - dataNascita.getFullYear() < 18 ||  //if per controllare che la data di nascita inserita sia di un maggiorenne
        (nowDate.getFullYear() - dataNascita.getFullYear() === 18 && nowDate.getMonth() < dataNascita.getMonth()) ||
        (nowDate.getFullYear() - dataNascita.getFullYear() === 18 && nowDate.getMonth() === dataNascita.getMonth() && nowDate.getDate() < dataNascita.getDate())
    ) {
        ageAlert.style.color = "#FF0000";       //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        ageAlert.style.fontSize = "small";
        dataInserita.focus();
        dataInserita.scrollIntoView({ behavior: "smooth", block: "center"});
        dataInserita.style.borderColor = "#FF0000";
        // alert('non sei maggiorenne!');
        valido = false;
    } else if (!regexEmail.test(email.value)) {
        emailAlert.hidden = false;       //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        email.focus();
        email.scrollIntoView({ behavior: "smooth", block: "center"});
        email.style.borderColor = "#FF0000";
        // alert('Email non valida!');
        valido = false;
    } else if (!regexNumero.test(numero.value)) {
        numero.focus();
        numero.scrollIntoView({behavior: "smooth", block: "center"});
        numero.style.borderColor = "#FF0000";
        const messaggioErrore = document.createElement("span");
        messaggioErrore.className = "errore";
        messaggioErrore.textContent = "Inserire un numero di telefono valido!";
        messaggioErrore.style.fontSize = "x-small";
        messaggioErrore.style.color = "#FF0000";
        numero.parentNode.appendChild(messaggioErrore);
        valido = false;
    }
    else if (!regexPass.test(passwordVal.value)) {
        passAlert.style.color = "#FF0000";
        passAlert.style.fontSize = "small";
        passwordVal.focus();              //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        passwordVal.scrollIntoView({ behavior: "smooth", block: "center"});
        passwordVal.style.borderColor = "#FF0000";
        // alert('Password non valida!');
        valido = false;
    } else if (passwordVal.value !== confpassword.value) {
        confPassAlert.hidden = false;     //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        passwordVal.focus();
        passwordVal.scrollIntoView({ behavior: "smooth", block: "center"});
        passwordVal.style.borderColor = "#FF0000";
        // alert('Password non valida!');
        valido = false;
    }
    return valido;
}

function resetForm() {
    /*
    * recupero tutti i messaggi di errore fatti precedentemente e li elimino
    * */
    let messaggiErrore = document.querySelectorAll(".inputAndLabel .errore");
    if (messaggiErrore !== null) {
        messaggiErrore.forEach(function(element) {
            element.remove();
        });
    }
    ageAlert.style.color = "#000000";
    ageAlert.style.fontSize = "xx-small";
    emailAlert.hidden = true;       //nascondo tutti gli i messaggi di errore
    passAlert.style.color = "#000000";
    passAlert.style.fontSize = "xx-small";
    confPassAlert.hidden = true;

    nome.style.borderBottomColor =  "black";
    cognome.style.borderBottomColor =  "black";
    email.style.borderBottomColor =  "black";
    datadinascita.style.borderBottomColor =  "black";
    telefono.style.borderBottomColor =  "black";
    passwordVal.style.borderBottomColor =  "black";
    username.style.borderBottomColor =  "black";
    confpassword.style.borderBottomColor =  "black";
    nome.focus();

    if(document.getElementById("mexerr") !== null){
        document.getElementById("mexerr").remove();
    }

}
