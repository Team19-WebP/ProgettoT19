// prendo l'elemento con la "finestra" dell'informativa cookies
let boxInformativaCookies = document.getElementById("boxInformativaCookies");
// funzione che chiude la finestra
function chiudiInformativa() {
    boxInformativaCookies.style.display = "none";
}
function apriInformativa() {
    boxInformativaCookies.style.display = "block";
}

// funzione per controllare se l'utente ha preso visione dell'informativa
function controllaPresaVisioneCookies(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let prefCookies = this.responseText;
                /* Se non sono settati allora apro l'informativa. */
                if(prefCookies == "false"){
                    apriInformativa();
                }
            }
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

// richiesta alla servlet ServletCookies per registrare la presa visione dell'informativa
function confermaPresaVisioneCookies(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            chiudiInformativa();
        }
    }
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("cookies=" + encodeURIComponent("true"));
}