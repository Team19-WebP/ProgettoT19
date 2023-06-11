/* Ho tirato via la regex della password, così può entrare anche l'amministratore.*/
let user = document.getElementById("username");
let password = document.getElementById("password");
let requiredElements = document.querySelectorAll(".inputAndLabel input[type='text'], .inputAndLabel input[type='password']");
function validaFormLogin() {
    resetForm();
    let valido = true;
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
            element.scrollIntoView({behavior: "smooth", block: "center"});
            element.style.borderColor = "#FF0000";
            const messaggioErrore = document.createElement("span");
            messaggioErrore.className = "errore";
            messaggioErrore.textContent = "Per favore inserire " + element.name;
            messaggioErrore.style.fontSize = "x-small";
            messaggioErrore.style.color = "#FF0000";
            element.parentNode.appendChild(messaggioErrore);
            /*invalido la submit*/
            valido = false;
        } else {
            element.style.borderColor = "#000000";
        }
    });
    return valido;
}
function resetForm() {
    requiredElements.forEach(function(element) {
        element.style.borderColor = "#000000";
    });
    let messaggiErrore = document.querySelectorAll(".inputAndLabel .errore");
    if (messaggiErrore !== null) {
        messaggiErrore.forEach(function(element) {
            element.remove();
        });
    }
    username.focus();

    if(document.getElementById("mexerr") !== null){
        document.getElementById("mexerr").innerHTML = "";
    }
}

