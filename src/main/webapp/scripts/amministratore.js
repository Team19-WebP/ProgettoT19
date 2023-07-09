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
                if(entry.page == "Generale") {
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

let donazioniGiornaliere = []; //
let donazioniMensili = [];     // variabili dove salvo i dati che prendo dal DB per inserirli nel grafico
let donazioniAnnuali = 0;      //


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

            donazioniAnnuali = 0;
            for(let i=0; i<12; i++){
                donazioniGiornaliere.push([]);
                donazioniMensili[i] = 0;
            }
            for(let i=0; i<12; i++){
                for(let j=0; j<31; j++){
                    donazioniGiornaliere[i][j] = 0;
                }
            }

            let my_JSON_array = this.response;
            if (my_JSON_array != null && my_JSON_array.length > 0) {

                for(let i=0; i< my_JSON_array.length; i++){
                    let objDonaz = JSON.parse(my_JSON_array[i]);
                    donazioniGiornaliere[objDonaz.month-1][objDonaz.day-1] += objDonaz.importo;
                    donazioniMensili[objDonaz.month-1] += objDonaz.importo;
                    donazioniAnnuali += objDonaz.importo;
                }

            }
            let donTot = document.querySelector("#totaleDonazioni");

            donTot.innerHTML = "Il sito ha ricevuto <b>"+ donazioniAnnuali.toFixed(2) +"€</b> in totale.";

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
            text: 'Grafico donazioni al sito nel 2023'
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

        series: [{name: '2023', colorByPoint: true,
            data: [
                {name: 'Gennaio'  ,y: donazioniMensili[0]  , drilldown: 'gennaio'},   //
                {name: 'Febbraio' ,y: donazioniMensili[1]  , drilldown: 'febbraio'},  //
                {name: 'Marzo'    ,y: donazioniMensili[2]  , drilldown: 'marzo'},     //
                {name: 'Aprile'   ,y: donazioniMensili[3]  , drilldown: 'aprile'},    //
                {name: 'Maggio'   ,y: donazioniMensili[4]  , drilldown: 'maggio'},    //
                {name: 'Giugno'   ,y: donazioniMensili[5]  , drilldown: 'giugno'},    // qui definisco i dati delle colonne principali
                {name: 'Luglio'   ,y: donazioniMensili[6]  , drilldown: 'luglio'},    // (le donazioni per mese)
                {name: 'Agosto'   ,y: donazioniMensili[7]  , drilldown: 'agosto'},    //
                {name: 'Settembre',y: donazioniMensili[8]  , drilldown: 'settembre'}, //
                {name: 'Ottobre'  ,y: donazioniMensili[9]  , drilldown: 'ottobre'},   //
                {name: 'Novembre' ,y: donazioniMensili[10] , drilldown: 'novembre'},  //
                {name: 'Dicembre' ,y: donazioniMensili[11] , drilldown: 'dicembre'}   //
            ]}],
        drilldown: {
            breadcrumbs: {
                position: {align: 'right'}
            },
            series: [{
                    name: 'gennaio',
                    id: 'gennaio',
                    data: [
                        ['01/01', donazioniGiornaliere[0][0]],  // queste quì invece sono le donazioni divise per giorno
                        ['02/01', donazioniGiornaliere[0][1]],  // visualizzabili cliccando su uno specifico mese
                        ['03/01', donazioniGiornaliere[0][2]],
                        ['04/01', donazioniGiornaliere[0][3]],
                        ['05/01', donazioniGiornaliere[0][4]],
                        ['06/01', donazioniGiornaliere[0][5]],
                        ['07/01', donazioniGiornaliere[0][6]],
                        ['08/01', donazioniGiornaliere[0][7]],
                        ['09/01', donazioniGiornaliere[0][8]],
                        ['10/01', donazioniGiornaliere[0][9]],
                        ['11/01', donazioniGiornaliere[0][10]],
                        ['12/01', donazioniGiornaliere[0][11]],
                        ['13/01', donazioniGiornaliere[0][12]],
                        ['14/01', donazioniGiornaliere[0][13]],
                        ['15/01', donazioniGiornaliere[0][14]],
                        ['16/01', donazioniGiornaliere[0][15]],
                        ['17/01', donazioniGiornaliere[0][16]],
                        ['18/01', donazioniGiornaliere[0][17]],
                        ['19/01', donazioniGiornaliere[0][18]],
                        ['20/01', donazioniGiornaliere[0][19]],
                        ['21/01', donazioniGiornaliere[0][20]],
                        ['22/01', donazioniGiornaliere[0][21]],
                        ['23/01', donazioniGiornaliere[0][22]],
                        ['24/01', donazioniGiornaliere[0][23]],
                        ['25/01', donazioniGiornaliere[0][24]],
                        ['26/01', donazioniGiornaliere[0][25]],
                        ['27/01', donazioniGiornaliere[0][26]],
                        ['28/01', donazioniGiornaliere[0][27]],
                        ['29/01', donazioniGiornaliere[0][28]],
                        ['30/01', donazioniGiornaliere[0][29]],
                        ['31/01', donazioniGiornaliere[0][30]]
                    ]}, {
                    name: 'febbraio',
                    id: 'febbraio',
                    data: [
                        ['01/02', donazioniGiornaliere[1][0]],
                        ['02/02', donazioniGiornaliere[1][1]],
                        ['03/02', donazioniGiornaliere[1][2]],
                        ['04/02', donazioniGiornaliere[1][3]],
                        ['05/02', donazioniGiornaliere[1][4]],
                        ['06/02', donazioniGiornaliere[1][5]],
                        ['07/02', donazioniGiornaliere[1][6]],
                        ['08/02', donazioniGiornaliere[1][7]],
                        ['09/02', donazioniGiornaliere[1][8]],
                        ['10/02', donazioniGiornaliere[1][9]],
                        ['11/02', donazioniGiornaliere[1][10]],
                        ['12/02', donazioniGiornaliere[1][11]],
                        ['13/02', donazioniGiornaliere[1][12]],
                        ['14/02', donazioniGiornaliere[1][13]],
                        ['15/02', donazioniGiornaliere[1][14]],
                        ['16/02', donazioniGiornaliere[1][15]],
                        ['17/02', donazioniGiornaliere[1][16]],
                        ['18/02', donazioniGiornaliere[1][17]],
                        ['19/02', donazioniGiornaliere[1][18]],
                        ['20/02', donazioniGiornaliere[1][19]],
                        ['21/02', donazioniGiornaliere[1][20]],
                        ['22/02', donazioniGiornaliere[1][21]],
                        ['23/02', donazioniGiornaliere[1][22]],
                        ['24/02', donazioniGiornaliere[1][23]],
                        ['25/02', donazioniGiornaliere[1][24]],
                        ['26/02', donazioniGiornaliere[1][25]],
                        ['27/02', donazioniGiornaliere[1][26]],
                        ['28/02', donazioniGiornaliere[1][27]],
                    ]}, {
                    name: 'marzo',
                    id: 'marzo',
                    data: [
                        ['01/03', donazioniGiornaliere[2][0]],
                        ['02/03', donazioniGiornaliere[2][1]],
                        ['03/03', donazioniGiornaliere[2][2]],
                        ['04/03', donazioniGiornaliere[2][3]],
                        ['05/03', donazioniGiornaliere[2][4]],
                        ['06/03', donazioniGiornaliere[2][5]],
                        ['07/03', donazioniGiornaliere[2][6]],
                        ['08/03', donazioniGiornaliere[2][7]],
                        ['09/03', donazioniGiornaliere[2][8]],
                        ['10/03', donazioniGiornaliere[2][9]],
                        ['11/03', donazioniGiornaliere[2][10]],
                        ['12/03', donazioniGiornaliere[2][11]],
                        ['13/03', donazioniGiornaliere[2][12]],
                        ['14/03', donazioniGiornaliere[2][13]],
                        ['15/03', donazioniGiornaliere[2][14]],
                        ['16/03', donazioniGiornaliere[2][15]],
                        ['17/03', donazioniGiornaliere[2][16]],
                        ['18/03', donazioniGiornaliere[2][17]],
                        ['19/03', donazioniGiornaliere[2][18]],
                        ['20/03', donazioniGiornaliere[2][19]],
                        ['21/03', donazioniGiornaliere[2][20]],
                        ['22/03', donazioniGiornaliere[2][21]],
                        ['23/03', donazioniGiornaliere[2][22]],
                        ['24/03', donazioniGiornaliere[2][23]],
                        ['25/03', donazioniGiornaliere[2][24]],
                        ['26/03', donazioniGiornaliere[2][25]],
                        ['27/03', donazioniGiornaliere[2][26]],
                        ['28/03', donazioniGiornaliere[2][27]],
                        ['29/03', donazioniGiornaliere[2][28]],
                        ['30/03', donazioniGiornaliere[2][29]],
                        ['31/03', donazioniGiornaliere[2][30]]
                    ]}, {
                    name: 'aprile',
                    id: 'aprile',
                    data: [
                        ['01/04', donazioniGiornaliere[3][0]],
                        ['02/04', donazioniGiornaliere[3][1]],
                        ['03/04', donazioniGiornaliere[3][2]],
                        ['04/04', donazioniGiornaliere[3][3]],
                        ['05/04', donazioniGiornaliere[3][4]],
                        ['06/04', donazioniGiornaliere[3][5]],
                        ['07/04', donazioniGiornaliere[3][6]],
                        ['08/04', donazioniGiornaliere[3][7]],
                        ['09/04', donazioniGiornaliere[3][8]],
                        ['10/04', donazioniGiornaliere[3][9]],
                        ['11/04', donazioniGiornaliere[3][10]],
                        ['12/04', donazioniGiornaliere[3][11]],
                        ['13/04', donazioniGiornaliere[3][12]],
                        ['14/04', donazioniGiornaliere[3][13]],
                        ['15/04', donazioniGiornaliere[3][14]],
                        ['16/04', donazioniGiornaliere[3][15]],
                        ['17/04', donazioniGiornaliere[3][16]],
                        ['18/04', donazioniGiornaliere[3][17]],
                        ['19/04', donazioniGiornaliere[3][18]],
                        ['20/04', donazioniGiornaliere[3][19]],
                        ['21/04', donazioniGiornaliere[3][20]],
                        ['22/04', donazioniGiornaliere[3][21]],
                        ['23/04', donazioniGiornaliere[3][22]],
                        ['24/04', donazioniGiornaliere[3][23]],
                        ['25/04', donazioniGiornaliere[3][24]],
                        ['26/04', donazioniGiornaliere[3][25]],
                        ['27/04', donazioniGiornaliere[3][26]],
                        ['28/04', donazioniGiornaliere[3][27]],
                        ['29/04', donazioniGiornaliere[3][28]],
                        ['30/04', donazioniGiornaliere[3][29]]
                    ]}, {
                    name: 'maggio',
                    id: 'maggio',
                    data: [
                        ['01/05', donazioniGiornaliere[4][0]],
                        ['02/05', donazioniGiornaliere[4][1]],
                        ['03/05', donazioniGiornaliere[4][2]],
                        ['04/05', donazioniGiornaliere[4][3]],
                        ['05/05', donazioniGiornaliere[4][4]],
                        ['06/05', donazioniGiornaliere[4][5]],
                        ['07/05', donazioniGiornaliere[4][6]],
                        ['08/05', donazioniGiornaliere[4][7]],
                        ['09/05', donazioniGiornaliere[4][8]],
                        ['10/05', donazioniGiornaliere[4][9]],
                        ['11/05', donazioniGiornaliere[4][10]],
                        ['12/05', donazioniGiornaliere[4][11]],
                        ['13/05', donazioniGiornaliere[4][12]],
                        ['14/05', donazioniGiornaliere[4][13]],
                        ['15/05', donazioniGiornaliere[4][14]],
                        ['16/05', donazioniGiornaliere[4][15]],
                        ['17/05', donazioniGiornaliere[4][16]],
                        ['18/05', donazioniGiornaliere[4][17]],
                        ['19/05', donazioniGiornaliere[4][18]],
                        ['20/05', donazioniGiornaliere[4][19]],
                        ['21/05', donazioniGiornaliere[4][20]],
                        ['22/05', donazioniGiornaliere[4][21]],
                        ['23/05', donazioniGiornaliere[4][22]],
                        ['24/05', donazioniGiornaliere[4][23]],
                        ['25/05', donazioniGiornaliere[4][24]],
                        ['26/05', donazioniGiornaliere[4][25]],
                        ['27/05', donazioniGiornaliere[4][26]],
                        ['28/05', donazioniGiornaliere[4][27]],
                        ['29/05', donazioniGiornaliere[4][28]],
                        ['30/05', donazioniGiornaliere[4][29]],
                        ['31/05', donazioniGiornaliere[4][30]]
                    ]}, {
                    name: 'giugno',
                    id: 'giugno',
                    data: [
                        ['01/06', donazioniGiornaliere[5][0]],
                        ['02/06', donazioniGiornaliere[5][1]],
                        ['03/06', donazioniGiornaliere[5][2]],
                        ['04/06', donazioniGiornaliere[5][3]],
                        ['05/06', donazioniGiornaliere[5][4]],
                        ['06/06', donazioniGiornaliere[5][5]],
                        ['07/06', donazioniGiornaliere[5][6]],
                        ['08/06', donazioniGiornaliere[5][7]],
                        ['09/06', donazioniGiornaliere[5][8]],
                        ['10/06', donazioniGiornaliere[5][9]],
                        ['11/06', donazioniGiornaliere[5][10]],
                        ['12/06', donazioniGiornaliere[5][11]],
                        ['13/06', donazioniGiornaliere[5][12]],
                        ['14/06', donazioniGiornaliere[5][13]],
                        ['15/06', donazioniGiornaliere[5][14]],
                        ['16/06', donazioniGiornaliere[5][15]],
                        ['17/06', donazioniGiornaliere[5][16]],
                        ['18/06', donazioniGiornaliere[5][17]],
                        ['19/06', donazioniGiornaliere[5][18]],
                        ['20/06', donazioniGiornaliere[5][19]],
                        ['21/06', donazioniGiornaliere[5][20]],
                        ['22/06', donazioniGiornaliere[5][21]],
                        ['23/06', donazioniGiornaliere[5][22]],
                        ['24/06', donazioniGiornaliere[5][23]],
                        ['25/06', donazioniGiornaliere[5][24]],
                        ['26/06', donazioniGiornaliere[5][25]],
                        ['27/06', donazioniGiornaliere[5][26]],
                        ['28/06', donazioniGiornaliere[5][27]],
                        ['29/06', donazioniGiornaliere[5][28]],
                        ['30/06', donazioniGiornaliere[5][29]],
                    ]}, {
                    name: 'luglio',
                    id: 'luglio',
                    data: [
                        ['01/07', donazioniGiornaliere[6][0]],
                        ['02/07', donazioniGiornaliere[6][1]],
                        ['03/07', donazioniGiornaliere[6][2]],
                        ['04/07', donazioniGiornaliere[6][3]],
                        ['05/07', donazioniGiornaliere[6][4]],
                        ['06/07', donazioniGiornaliere[6][5]],
                        ['07/07', donazioniGiornaliere[6][6]],
                        ['08/07', donazioniGiornaliere[6][7]],
                        ['09/07', donazioniGiornaliere[6][8]],
                        ['10/07', donazioniGiornaliere[6][9]],
                        ['11/07', donazioniGiornaliere[6][10]],
                        ['12/07', donazioniGiornaliere[6][11]],
                        ['13/07', donazioniGiornaliere[6][12]],
                        ['14/07', donazioniGiornaliere[6][13]],
                        ['15/07', donazioniGiornaliere[6][14]],
                        ['16/07', donazioniGiornaliere[6][15]],
                        ['17/07', donazioniGiornaliere[6][16]],
                        ['18/07', donazioniGiornaliere[6][17]],
                        ['19/07', donazioniGiornaliere[6][18]],
                        ['20/07', donazioniGiornaliere[6][19]],
                        ['21/07', donazioniGiornaliere[6][20]],
                        ['22/07', donazioniGiornaliere[6][21]],
                        ['23/07', donazioniGiornaliere[6][22]],
                        ['24/07', donazioniGiornaliere[6][23]],
                        ['25/07', donazioniGiornaliere[6][24]],
                        ['26/07', donazioniGiornaliere[6][25]],
                        ['27/07', donazioniGiornaliere[6][26]],
                        ['28/07', donazioniGiornaliere[6][27]],
                        ['29/07', donazioniGiornaliere[6][28]],
                        ['30/07', donazioniGiornaliere[6][29]],
                        ['31/07', donazioniGiornaliere[6][30]]
                    ]}, {
                    name: 'agosto',
                    id: 'agosto',
                    data: [
                        ['01/08', donazioniGiornaliere[7][0]],
                        ['02/08', donazioniGiornaliere[7][1]],
                        ['03/08', donazioniGiornaliere[7][2]],
                        ['04/08', donazioniGiornaliere[7][3]],
                        ['05/08', donazioniGiornaliere[7][4]],
                        ['06/08', donazioniGiornaliere[7][5]],
                        ['07/08', donazioniGiornaliere[7][6]],
                        ['08/08', donazioniGiornaliere[7][7]],
                        ['09/08', donazioniGiornaliere[7][8]],
                        ['10/08', donazioniGiornaliere[7][9]],
                        ['11/08', donazioniGiornaliere[7][10]],
                        ['12/08', donazioniGiornaliere[7][11]],
                        ['13/08', donazioniGiornaliere[7][12]],
                        ['14/08', donazioniGiornaliere[7][13]],
                        ['15/08', donazioniGiornaliere[7][14]],
                        ['16/08', donazioniGiornaliere[7][15]],
                        ['17/08', donazioniGiornaliere[7][16]],
                        ['18/08', donazioniGiornaliere[7][17]],
                        ['19/08', donazioniGiornaliere[7][18]],
                        ['20/08', donazioniGiornaliere[7][19]],
                        ['21/08', donazioniGiornaliere[7][20]],
                        ['22/08', donazioniGiornaliere[7][21]],
                        ['23/08', donazioniGiornaliere[7][22]],
                        ['24/08', donazioniGiornaliere[7][23]],
                        ['25/08', donazioniGiornaliere[7][24]],
                        ['26/08', donazioniGiornaliere[7][25]],
                        ['27/08', donazioniGiornaliere[7][26]],
                        ['28/08', donazioniGiornaliere[7][27]],
                        ['29/08', donazioniGiornaliere[7][28]],
                        ['30/08', donazioniGiornaliere[7][29]],
                        ['31/08', donazioniGiornaliere[7][30]]
                    ]}, {
                    name: 'settembre',
                    id: 'settembre',
                    data: [
                        ['01/09', donazioniGiornaliere[8][0]],
                        ['02/09', donazioniGiornaliere[8][1]],
                        ['03/09', donazioniGiornaliere[8][2]],
                        ['04/09', donazioniGiornaliere[8][3]],
                        ['05/09', donazioniGiornaliere[8][4]],
                        ['06/09', donazioniGiornaliere[8][5]],
                        ['07/09', donazioniGiornaliere[8][6]],
                        ['08/09', donazioniGiornaliere[8][7]],
                        ['09/09', donazioniGiornaliere[8][8]],
                        ['10/09', donazioniGiornaliere[8][9]],
                        ['11/09', donazioniGiornaliere[8][10]],
                        ['12/09', donazioniGiornaliere[8][11]],
                        ['13/09', donazioniGiornaliere[8][12]],
                        ['14/09', donazioniGiornaliere[8][13]],
                        ['15/09', donazioniGiornaliere[8][14]],
                        ['16/09', donazioniGiornaliere[8][15]],
                        ['17/09', donazioniGiornaliere[8][16]],
                        ['18/09', donazioniGiornaliere[8][17]],
                        ['19/09', donazioniGiornaliere[8][18]],
                        ['20/09', donazioniGiornaliere[8][19]],
                        ['21/09', donazioniGiornaliere[8][20]],
                        ['22/09', donazioniGiornaliere[8][21]],
                        ['23/09', donazioniGiornaliere[8][22]],
                        ['24/09', donazioniGiornaliere[8][23]],
                        ['25/09', donazioniGiornaliere[8][24]],
                        ['26/09', donazioniGiornaliere[8][25]],
                        ['27/09', donazioniGiornaliere[8][26]],
                        ['28/09', donazioniGiornaliere[8][27]],
                        ['29/09', donazioniGiornaliere[8][28]],
                        ['30/09', donazioniGiornaliere[8][29]]
                    ]}, {
                    name: 'ottobre',
                    id: 'ottobre',
                    data: [
                        ['01/10', donazioniGiornaliere[9][0]],
                        ['02/10', donazioniGiornaliere[9][1]],
                        ['03/10', donazioniGiornaliere[9][2]],
                        ['04/10', donazioniGiornaliere[9][3]],
                        ['05/10', donazioniGiornaliere[9][4]],
                        ['06/10', donazioniGiornaliere[9][5]],
                        ['07/10', donazioniGiornaliere[9][6]],
                        ['08/10', donazioniGiornaliere[9][7]],
                        ['09/10', donazioniGiornaliere[9][8]],
                        ['10/10', donazioniGiornaliere[9][9]],
                        ['11/10', donazioniGiornaliere[9][10]],
                        ['12/10', donazioniGiornaliere[9][11]],
                        ['13/10', donazioniGiornaliere[9][12]],
                        ['14/10', donazioniGiornaliere[9][13]],
                        ['15/10', donazioniGiornaliere[9][14]],
                        ['16/10', donazioniGiornaliere[9][15]],
                        ['17/10', donazioniGiornaliere[9][16]],
                        ['18/10', donazioniGiornaliere[9][17]],
                        ['19/10', donazioniGiornaliere[9][18]],
                        ['20/10', donazioniGiornaliere[9][19]],
                        ['21/10', donazioniGiornaliere[9][20]],
                        ['22/10', donazioniGiornaliere[9][21]],
                        ['23/10', donazioniGiornaliere[9][22]],
                        ['24/10', donazioniGiornaliere[9][23]],
                        ['25/10', donazioniGiornaliere[9][24]],
                        ['26/10', donazioniGiornaliere[9][25]],
                        ['27/10', donazioniGiornaliere[9][26]],
                        ['28/10', donazioniGiornaliere[9][27]],
                        ['29/10', donazioniGiornaliere[9][28]],
                        ['30/10', donazioniGiornaliere[9][29]],
                        ['31/10', donazioniGiornaliere[9][30]],
                    ]}, {
                    name: 'novembre',
                    id: 'novembre',
                    data: [
                        ['01/11', donazioniGiornaliere[10][0]],
                        ['02/11', donazioniGiornaliere[10][1]],
                        ['03/11', donazioniGiornaliere[10][2]],
                        ['04/11', donazioniGiornaliere[10][3]],
                        ['05/11', donazioniGiornaliere[10][4]],
                        ['06/11', donazioniGiornaliere[10][5]],
                        ['07/11', donazioniGiornaliere[10][6]],
                        ['08/11', donazioniGiornaliere[10][7]],
                        ['09/11', donazioniGiornaliere[10][8]],
                        ['10/11', donazioniGiornaliere[10][9]],
                        ['11/11', donazioniGiornaliere[10][10]],
                        ['12/11', donazioniGiornaliere[10][11]],
                        ['13/11', donazioniGiornaliere[10][12]],
                        ['14/11', donazioniGiornaliere[10][13]],
                        ['15/11', donazioniGiornaliere[10][14]],
                        ['16/11', donazioniGiornaliere[10][15]],
                        ['17/11', donazioniGiornaliere[10][16]],
                        ['18/11', donazioniGiornaliere[10][17]],
                        ['19/11', donazioniGiornaliere[10][18]],
                        ['20/11', donazioniGiornaliere[10][19]],
                        ['21/11', donazioniGiornaliere[10][20]],
                        ['22/11', donazioniGiornaliere[10][21]],
                        ['23/11', donazioniGiornaliere[10][22]],
                        ['24/11', donazioniGiornaliere[10][23]],
                        ['25/11', donazioniGiornaliere[10][24]],
                        ['26/11', donazioniGiornaliere[10][25]],
                        ['27/11', donazioniGiornaliere[10][26]],
                        ['28/11', donazioniGiornaliere[10][27]],
                        ['29/11', donazioniGiornaliere[10][28]],
                        ['30/11', donazioniGiornaliere[10][29]]
                    ]}, {
                    name: 'dicembre',
                    id: 'dicembre',
                    data: [
                        ['01/12', donazioniGiornaliere[11][0]],
                        ['02/12', donazioniGiornaliere[11][1]],
                        ['03/12', donazioniGiornaliere[11][2]],
                        ['04/12', donazioniGiornaliere[11][3]],
                        ['05/12', donazioniGiornaliere[11][4]],
                        ['06/12', donazioniGiornaliere[11][5]],
                        ['07/12', donazioniGiornaliere[11][6]],
                        ['08/12', donazioniGiornaliere[11][7]],
                        ['09/12', donazioniGiornaliere[11][8]],
                        ['10/12', donazioniGiornaliere[11][9]],
                        ['11/12', donazioniGiornaliere[11][10]],
                        ['12/12', donazioniGiornaliere[11][11]],
                        ['13/12', donazioniGiornaliere[11][12]],
                        ['14/12', donazioniGiornaliere[11][13]],
                        ['15/12', donazioniGiornaliere[11][14]],
                        ['16/12', donazioniGiornaliere[11][15]],
                        ['17/12', donazioniGiornaliere[11][16]],
                        ['18/12', donazioniGiornaliere[11][17]],
                        ['19/12', donazioniGiornaliere[11][18]],
                        ['20/12', donazioniGiornaliere[11][19]],
                        ['21/12', donazioniGiornaliere[11][20]],
                        ['22/12', donazioniGiornaliere[11][21]],
                        ['23/12', donazioniGiornaliere[11][22]],
                        ['24/12', donazioniGiornaliere[11][23]],
                        ['25/12', donazioniGiornaliere[11][24]],
                        ['26/12', donazioniGiornaliere[11][25]],
                        ['27/12', donazioniGiornaliere[11][26]],
                        ['28/12', donazioniGiornaliere[11][27]],
                        ['29/12', donazioniGiornaliere[11][28]],
                        ['30/12', donazioniGiornaliere[11][29]],
                        ['31/12', donazioniGiornaliere[11][30]]
                    ]},
            ]}
    });
}
////////////////////////////////////////////////////GRAFICI/////////////////////////////////////////////////////////////
