let utenti = document.getElementById("utenti");               //
let simpatizzanti = document.getElementById("simpatizzanti"); //
let aderenti = document.getElementById("aderenti");           // DIV delle varie sezioni da mostrare/nascondere
let visite = document.getElementById("visite");               //
let donations = document.getElementById("donations");         //
let totaleDonazioni = document.getElementById("totaleDonazioni");
let contatoreVisite = document.getElementById("contatoreVisite");

let buttonUtenti = document.getElementById("buttonUtenti");               //
let buttonSimpatizzanti = document.getElementById("buttonSimpatizzanti"); //
let buttonAderenti = document.getElementById("buttonAderenti");           // bottoni per mostrare le varie sezioni
let buttonVisite = document.getElementById("buttonVisite");               //
let buttonDonations = document.getElementById("buttonDonations");         //
/** queste funzioni chiamate <b>visualizzaXXX</b> nascondono tutti i contenuti della pagina privata tranne quello della sezione selezionata tramite button*/
function visualizzaUtenti(){
    if(utenti.hidden === true){
        buttonUtenti.className="selezionatoPaginePers";
        buttonSimpatizzanti.className="";
        buttonAderenti.className="";
        buttonVisite.className="";
        buttonDonations.className="";
        stampaUtenti("/progettoteam19/ServletGetAllUsers", "all");
        utenti.hidden = false;
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = true;
        donations.hidden = true;
        contatoreVisite.hidden = true;
        totaleDonazioni.hidden = true;
    } else {
        buttonUtenti.className="";
        utenti.hidden = true;
    }
}
function visualizzaSimpatizzanti(){
    if(simpatizzanti.hidden === true){
        buttonUtenti.className="";
        buttonSimpatizzanti.className="selezionatoPaginePers";
        buttonAderenti.className="";
        buttonVisite.className="";
        buttonDonations.className="";
        stampaUtenti("/progettoteam19/ServletGetAllOneType", "simpatizzante")
        utenti.hidden = true;
        simpatizzanti.hidden = false;
        aderenti.hidden = true;
        visite.hidden = true;
        contatoreVisite.hidden = true;
        totaleDonazioni.hidden = true;
        donations.hidden = true;
    } else {
        buttonSimpatizzanti.className="";
        simpatizzanti.hidden = true;
    }
}
function visualizzaAderenti(){
    if(aderenti.hidden === true){
        buttonUtenti.className="";
        buttonSimpatizzanti.className="";
        buttonAderenti.className="selezionatoPaginePers";
        buttonVisite.className="";
        buttonDonations.className="";
        stampaUtenti("/progettoteam19/ServletGetAllOneType", "aderente")
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = false;
        visite.hidden = true;
        contatoreVisite.hidden = true;
        totaleDonazioni.hidden = true;
        donations.hidden = true;
    } else {
        buttonAderenti.className="";
        aderenti.hidden = true;
    }
}
function visualizzaVisite(){
    if(visite.hidden === true){
        buttonUtenti.className="";
        buttonSimpatizzanti.className="";
        buttonAderenti.className="";
        buttonVisite.className="selezionatoPaginePers";
        buttonDonations.className="";
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = false;
        donations.hidden = true;
        contatoreVisite.hidden = false;
        totaleDonazioni.hidden = true;
        getHits();
    } else {
        buttonVisite.className="";
        contatoreVisite.hidden = true;
        visite.hidden = true;
    }
}
function visualizzaDonations(){
    if(donations.hidden === true){
        buttonUtenti.className="";
        buttonSimpatizzanti.className="";
        buttonAderenti.className="";
        buttonVisite.className="";
        buttonDonations.className="selezionatoPaginePers";
        setDonaz();
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = true;
        donations.hidden = false;
        contatoreVisite.hidden = true;
        totaleDonazioni.hidden = false;
    } else {
        buttonDonations.className="";
        totaleDonazioni.hidden = true;
        donations.hidden = true;
    }
}
/**in questa funzione vengono recuperati i dati da stampare nelle tabelle di utenti, simpatizzanti e aderenti con AJAJ  */
function stampaUtenti(url, type) {

    if (type !== "all") {
        url += "?tipologia=" + type;
    }
    // Making request
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.responseType = "json";

    // Callback
    xhttp.onreadystatechange = function () {
        let done = 4, ok = 200;
        if (xhttp.readyState === done && xhttp.status === ok) {

            // Getting returned array of cities
            let my_JSON_array = this.response;

            // Finding table to fill in
            let table = document.getElementById(type);

            // Removing old table if existing and hiding it
            while (table.childNodes.length) {
                table.removeChild(table.childNodes[0]);
            }
            table.style.border = "0px solid";

            if (my_JSON_array != null && my_JSON_array.length > 0) {

                let p = document.getElementById("no"+type);
                p.hidden = true;

                // Showing table

                // Creating table header
                let thead = table.createTHead();
                let row = thead.insertRow();
                let header = ["username", "nome", "cognome", "datadinascita", "email", "cellulare", "tipologia"];
                let headerColumn = ["Username", "Nome", "Cognome", "Data di nascita", "Email", "Cellulare", "Tipologia"];
                for (let key of headerColumn) {
                    if(type !== "all" && key==="Tipologia"){
                        break;
                    }
                    let th = document.createElement("th");
                    let text = document.createTextNode(key);
                    th.appendChild(text);
                    row.appendChild(th);
                }

                // Creating table rows
                for (let i = 0; i < my_JSON_array.length; i++) {
                    row = table.insertRow();
                    let current_JSON_object = JSON.parse(my_JSON_array[i]);
                    for (let key of header) {
                        if(type !== "all" && key==="tipologia"){
                            continue;
                        }
                        let cell = row.insertCell();
                        cell.style.border = "2px solid";
                        cell.style.alignContent = "center";
                        cell.style.padding = "0.5vw";
                        let text = document.createTextNode(current_JSON_object[key]);
                        cell.appendChild(text);
                    }
                }

            }
            else {
                let p = document.getElementById("no"+type);
                p.hidden = false;
            }
        }
    }
    // Sending request
    xhttp.send();
}
////////////////////////////////////////////////////GRAFICI/////////////////////////////////////////////////////////////

let dataHits = [];
function getHits() {    // Preparing request
    let url = "/progettoteam19/ServletGetHits";
    // Making request
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {
        let done = 4, ok = 200;
        if (xhttp.readyState === done && xhttp.status === ok) {

            let my_JSON_array =this.response;
            let totalHits;
            // dato da passare al grafico
            dataHits = [[]];
            // ciclo su tutto il JSON
            my_JSON_array.forEach(dataEntry => {
                // converto da JSON object a js object
                let entry =  JSON.parse(dataEntry);
                // salvo il totale dei contatori in una variabile a parte
                if(entry.page === "Generale") {
                    totalHits = entry.hits;
                } else {
                    // il resto lo aggiungo i dati nel array da passare al grafico
                    dataHits.push([entry.page, entry.hits]);
                }
            });
            let conTot = document.querySelector("#contatoreVisite");

            conTot.innerHTML = "Visite sito: <b>" + totalHits + "</b> ";
            creaGraficoHits();
        }
    }
    xhttp.send();
}

/** definisco tutti i parametri del grafico creato con le librerie di <b>HIGHCHARTS</b> */
function creaGraficoHits () {
    Highcharts.chart('GraficoVisite', {
        chart: {
            type: 'column',
            width: 800
        },
        title: {
            text: 'Visite per pagina al sito'
        },
        subtitle: {
            text: 'Source: Tum4World analytics'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'numero di visite'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'visite: <b>{point.y}</b>'
        },
        series: [{
            name: 'Visite',
            colors: [
                '#00ffff', '#ff00ff', '#008000', '#dc143c',
                '#0000ff', '#808080', '#ffff00', '#d2691e', //questi sono i colori delle varie colonne del grafico
                '#533be1', '#daa520', '#00ff00', '#800000',
                '#808000', '#2c46db', '#ff69b4'
            ],
            colorByPoint: true,
            groupPadding: 0,
            data: dataHits,
            dataLabels: { //qui definisco come devono essere visualizzati i dati sulle colonne
                enabled: true,
                rotation: -90,
                color: '#000000',
                align: 'right',
                format: '{point.y}',
                y: 5, // 5 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}

//--------------------------------------------------------------------------------------------------------------------//
// variabili per elaborare i dati sulle donazioni
let donazioniGiornaliere = [];
let donazioniMensili = [];
let donazioniAnnuali = 0;
// variabili da inserire nel grafico
let datiMensili = [{}];
let seriesGiornalieri = [{}];
// giorni a febbraio rispetto all'anno
let year = new Date().getFullYear();
let title = "Grafico delle donazioni ricevute nel " + year
let febDays = ((year % 4 === 0 && year % 0 !== 0) || year % 400 === 0 ? 29 : 28);
// array da usare per le label e per inserire il numero esatto di giorni al mese
const mesiGiorni = [
    ["Gennaio", 31],
    ["Febbraio", febDays],
    ["Marzo", 31],
    ["Aprile", 30],
    ["Maggio", 31],
    ["Giugno", 30],
    ["Luglio", 31],
    ["Agosto", 31],
    ["Settembre", 30],
    ["Ottobre", 31],
    ["Novembre", 30],
    ["Dicembre", 31]
]

/** in questa funzione vengono aggiornati i dati delle donazioni con AJAJ e poi chiamata la funzione che crea il grafico, <br>
     così da poterlo aggiornare ogni volta che viene mostrato */
function setDonaz() {
    // Preparing request
    let url = "/progettoteam19/ServletGetDonazioni";

    // Making request
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {
        let done = 4, ok = 200;
        if (xhttp.readyState === done && xhttp.status === ok) {

            // inizializzo le variabili a zero
            donazioniAnnuali = 0;
            for(let mese = 0; mese < 12; mese++){
                donazioniGiornaliere.push([]);
                donazioniMensili[mese] = 0;
                for(let giorno = 0; giorno < mesiGiorni[mese][1]; giorno++){
                    donazioniGiornaliere[mese][giorno] = 0;
                }
            }
            // elaboro la risposta
            let my_JSON_array = this.response;

            if (my_JSON_array != null && my_JSON_array.length > 0) {
                // inserisco le donazioni nella rispettiva data
                for(let i=0; i< my_JSON_array.length; i++){
                    let objDonaz = JSON.parse(my_JSON_array[i]);
                    donazioniGiornaliere[objDonaz.month-1][objDonaz.day-1] += objDonaz.importo;
                    donazioniMensili[objDonaz.month-1] += objDonaz.importo;
                    donazioniAnnuali += objDonaz.importo;
                }
                // preparo gli oggetti da inserire nel grafico
                for(let mese = 0; mese < 12; mese++) {
                    // dati per il grafico mensile
                    datiMensili.push({
                        name: mesiGiorni[mese][0],       // label mese
                        y: donazioniMensili[mese],       // donazione relativa al mese
                        drilldown: mesiGiorni[mese][0]   // label riferito ai dati giornalieri del mese
                    });
                    // dati per il grafico giornaliero (drilldown)
                    let dataGiornalieraPerMese = [];
                    for(let giorno= 0; giorno < mesiGiorni[mese][1]; giorno++) {
                        // preparo la label per la data in formato GG/MM
                        let formattedDate = String(giorno+1).padStart(2, '0') + "/" + String(mese+1).padStart(2, '0');
                        // preparazione giorno donazione
                        let donazioneGiorno = [formattedDate, donazioniGiornaliere[mese][giorno]]
                        dataGiornalieraPerMese.push(donazioneGiorno);
                    }
                    // serie per i grafici delle donazioni giornaliere suddivise in mesi
                    seriesGiornalieri.push({
                        name: mesiGiorni[mese][0],
                        id: mesiGiorni[mese][0],
                        data : dataGiornalieraPerMese
                    });
                }
            }
            // scrivo il totale delle donazioni ricevute nel rispettivo elemento
            let donTot = document.querySelector("#totaleDonazioni");
            donTot.innerHTML = "Il sito ha ricevuto <b>"+ donazioniAnnuali.toFixed(2) +"€</b> in totale.";
            // creo il grafico
            creaGraficoDonazioni();
        }
    }
    xhttp.send();
}


/**questa funzione definisce i parametri del grafico delle donazioni che poi viene creato dalle librerie di <b>HIGHCHARTS</b> */
function creaGraficoDonazioni(){

    Highcharts.chart('GraficoDonazioni', {
        chart: {
            type: 'column'
        },
        title: {
            align: 'left',
            text: title
        },
        subtitle: {
            align: 'left',
            text: 'Source: Tum4World analytics'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Donazioni al sito in €'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y} €'
                }
            }
        },

        tooltip: {  //questo definisce ciò che accade quando si passa con il mouse sopra una colonna
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}€</b><br/>',
        },

        series: [{
            name: '2023',
            colorByPoint: true,
            data: datiMensili
        }],
        drilldown: {
            breadcrumbs: {
                position: {align: 'right'}
            },
            series: seriesGiornalieri
        }
    });
}
////////////////////////////////////////////////////GRAFICI/////////////////////////////////////////////////////////////
