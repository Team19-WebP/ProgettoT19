let comboBox = document.querySelector("#comboBox");
let altroTextarea = document.querySelector("#altroTextarea");
let email = document.getElementById("email");
let emailAlert = document.getElementById("emailAlert");

altroTextarea.disabled = true;
comboBox.addEventListener("change", stateHandleTextarea);

function stateHandleTextarea() { // script che abilita la textarea solo se viene selezionata l'opzione "altro" dalla comboBox
    if (comboBox.value == "altro") {
        altroTextarea.disabled = false;
        altroTextarea.hidden = false;
        // per selezionare la textarea
        altroTextarea.focus();
        altroTextarea.scrollIntoView();
        altroTextarea.placeholder = "inserisci il motivo del contatto...";
    } else {
        altroTextarea.disabled = true;
        altroTextarea.hidden = true;
       // per cancellare il contenuto della textarea
        altroTextarea.value = "";
        altroTextarea.placeholder = "";
    }
}
function validaEmail() {
    const regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.{1}[a-zA-Z0-9]+$/;
    let valido = true;

    if (!regexEmail.test(email.value)) {
        emailAlert.hidden = false;       //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
        email.focus();
        email.scrollIntoView({behavior: "smooth", block: "center"});
        email.style.borderColor = "#FF0000";
        // alert('Email non valida!');
        valido = false;
    }
    return valido;
}
function resetContatti() {
    nascondiTextarea();
    email.style.borderColor = "#000000";
    emailAlert.hidden = true;
}
function nascondiTextarea() {   // script che nasconde la textarea
    altroTextarea.hidden = true;
}