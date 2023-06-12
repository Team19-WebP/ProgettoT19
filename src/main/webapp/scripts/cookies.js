// prendo l'elemento con la "finestra" dell'informativa cookies
let boxInformativaCookies = document.getElementById("boxInformativaCookies");
// funzione che chiude la finestra
function chiudiInformativa() {
    boxInformativaCookies.style.display = "none";
}
function apriInformativa() {
    boxInformativaCookies.style.display = "block";
}

// funzione per controllare se i cookies siano già stati impostati
function controllaPreferenza() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let prefCookies = this.responseText;
                /* Se non sono settati allora apro l'informativa. */
                if(prefCookies == "no"){
                    apriInformativa();
                }

            }
        }
    }
    xhttp.open("GET", "/progettoteam19/ServletSession", true);
    xhttp.send();
}

// richiesta alla servlet ServletSession per settare la scelta dell'utente
function preferenzaCookies(pref) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            chiudiInformativa();
        }
    }
    xhttp.open("POST", "/progettoteam19/ServletSession", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("cookies=" + encodeURIComponent(pref));
    console.log(encodeURIComponent(pref));
}
controllaPreferenza();