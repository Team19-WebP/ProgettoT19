let comboBox = document.querySelector("#comboBox");
let altroTextarea = document.querySelector("#altroTextarea");

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

function nascondiTextarea() {   // script che nasconde la textarea
    altroTextarea.hidden = true;
}