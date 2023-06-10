let utenti = document.querySelector("#utenti");                 //
let simpatizzanti = document.querySelector("#simpatizzanti");   //
let aderenti = document.querySelector("#aderenti");             // DIV delle varie sezioni da mostrare/nascondere
let visite = document.querySelector("#visite");                 //
let donations = document.querySelector("#donations");           //

function visualizzaUtenti(){
    if(utenti.hidden == true){
        stampaUtenti("/progettoteam19/ServletGetAllUsers", "all");
        utenti.hidden = false;
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = true;
        donations.hidden = true;

    } else {
        utenti.hidden = true;
    }
}

function visualizzaSimpatizzanti(){
    if(simpatizzanti.hidden == true){
        stampaUtenti("/progettoteam19/ServletGetAllOneType", "simpatizzante")
        utenti.hidden = true;
        simpatizzanti.hidden = false;
        aderenti.hidden = true;
        visite.hidden = true;
        donations.hidden = true;

    } else {
        simpatizzanti.hidden = true;
    }

}

function visualizzaAderenti(){
    if(aderenti.hidden == true){
        stampaUtenti("/progettoteam19/ServletGetAllOneType", "aderente")
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = false;
        visite.hidden = true;
        donations.hidden = true;

    } else {
        aderenti.hidden = true;
    }

}

function visualizzaVisite(){
    if(visite.hidden == true){
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = false;
        donations.hidden = true;

    } else {
        visite.hidden = true;
    }

}

function visualizzaDonations(){
    if(donations.hidden == true){
        setDonaz();
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = true;
        donations.hidden = false;

    } else {
        donations.hidden = true;
    }

}

function showOrHide(id){
    let idDati = "#info"+id;
    let dati = document.querySelector(idDati);

    dati.hidden = !dati.hidden;

}
function stampaUtenti(url, type) {
    // Preparing request
    // let url = "/progettoteam19/ServletGetAllUsers";

    if (type != "all") {
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

                // Displaying success
                // document.getElementById("result").innerHTML = "Data successfully retrieved";

                let p = document.getElementById("no"+type);
                p.hidden = true;

                // Showing table
                table.style.border = "1px solid";

                // Creating table header
                let thead = table.createTHead();
                let row = thead.insertRow();
                let header = ["username", "nome", "cognome", "datadinascita", "email", "cellulare", "tipologia"];
                let headerColumn = ["Username", "Nome", "Cognome", "Data di nascita", "Email", "Cellulare", "Tipologia"];
                for (let key of headerColumn) {
                    if(type != "all" && key=="Tipologia"){
                        break;
                    }
                    let th = document.createElement("th");
                    th.style.border = "1px solid";
                    let text = document.createTextNode(key);
                    th.appendChild(text);
                    row.appendChild(th);
                }

                // Creating table rows
                for (let i = 0; i < my_JSON_array.length; i++) {
                    row = table.insertRow();
                    let current_JSON_object = JSON.parse(my_JSON_array[i]);
                    console.log(current_JSON_object);
                    for (let key of header) {
                        if(type != "all" && key=="tipologia"){
                            continue;
                        }
                        let cell = row.insertCell();
                        cell.style.border = "1px solid";
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

let hitsHome = document.querySelector("#hitsHome");
let hitsAttivita = document.querySelector("#hitsAttivita");
let hitsAttivita1 = document.querySelector("#hitsAttivita1");
let hitsAttivita2 = document.querySelector("#hitsAttivita2");
let hitsAttivita3 = document.querySelector("#hitsAttivita3");
let hitsSignIn = document.querySelector("#hitsSignIn");
let hitsChiSiamo = document.querySelector("#hitsChiSiamo");
let hitsConfermaSignIn = document.querySelector("#hitsConfermaSignIn");
let hitsAderente = document.querySelector("#hitsAderente");
let hitsSimpatizzante = document.querySelector("#hitsSimpatizzante");
let hitsAmministratore = document.querySelector("#hitsAmministratore");
let hitsContatti = document.querySelector("#hitsContatti");
let hitsConfermaContatti = document.querySelector("#hitsConfermaContatti");
let hitsLogin = document.querySelector("#hitsLogin");
let hitsLogout = document.querySelector("#hitsLogout");

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
        pointFormat: 'visite: <b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'Visite',
        colors: [
            '#00ffff', '#ff00ff', '#008000', '#dc143c',
            '#0000ff', '#808080', '#ffff00', '#d2691e',
            '#533be1', '#daa520', '#00ff00', '#800000',
            '#808000', '#2c46db', '#ff69b4'
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['home', Number(hitsHome.innerText)],
            ['attivita', Number(hitsAttivita.innerText)],
            ['Aisha', Number(hitsAttivita1.innerText)],
            ['Team4World', Number(hitsAttivita2.innerText)],
            ['Abc4Future', Number(hitsAttivita3.innerText)],
            ['chiSiamo', Number(hitsChiSiamo.innerText)],
            ['contatti', Number(hitsContatti.innerText)],
            ['conferma contatti', Number(hitsConfermaContatti.innerText)],
            ['sign-in', Number(hitsSignIn.innerText)],
            ['conferma sign-in', Number(hitsConfermaSignIn.innerText)],
            ['login', Number(hitsLogin.innerText)],
            ['logout', Number(hitsLogout.innerText)],
            ['aderente', Number(hitsAderente.innerText)],
            ['simpatizzante', Number(hitsSimpatizzante.innerText)],
            ['amministratore', Number(hitsAmministratore.innerText)],
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});

//--------------------------------------------------------------------------------------------------------------------//
let anno = [];
let sommaMensile = [];
let sommatotale = 0;


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
            console.log("afssafas");

            for(let i=0; i<12; i++){
                anno.push([]);
                sommaMensile[i] = 0;
            }

            for(let i=0; i<12; i++){
                for(let j=0; j<31; j++){
                    anno[i][j] = 0;
                }
            }

            let my_JSON_array = this.response;

            if (my_JSON_array != null && my_JSON_array.length > 0) {

                for(let i=0; i< my_JSON_array.length; i++){
                    var objDonaz = JSON.parse(my_JSON_array[i]);
                    anno[objDonaz.month-1][objDonaz.day-1] += objDonaz.importo;
                    sommaMensile[objDonaz.month-1] += objDonaz.importo;
                    sommatotale += objDonaz.importo;
                }
                for(let i=0; i<12;i++){
                    console.log(sommaMensile[i]);
                }

            }
            let donTot = document.querySelector("#totaleDonazioni");

            donTot.innerText = "il sito ha ricevuto "+ sommatotale +"€ in totale.";

            crea();
            
        }
    }
    xhttp.send();
}


// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
function crea(){
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
                    format: '{point.y:.1f}€'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}€</b><br/>'
        },

        series: [{name: '2023', colorByPoint: true,
            data: [
                {name: 'Gennaio',  y: sommaMensile[0] , drilldown: 'gennaio'},
                {name: 'Febbraio', y: sommaMensile[1], drilldown: 'febbraio'},
                {name: 'Marzo',    y: sommaMensile[2] , drilldown: 'marzo'},
                {name: 'Aprile',   y: sommaMensile[3] , drilldown: 'aprile'},
                {name: 'Maggio',   y: sommaMensile[4] , drilldown: 'maggio'},
                {name: 'Giugno',   y: sommaMensile[5] , drilldown: 'giugno'},
                {name: 'Luglio',   y: sommaMensile[6] , drilldown: 'luglio'},
                {name: 'Agosto',   y: sommaMensile[7] , drilldown: 'agosto'},
                {name: 'Settembre',y: sommaMensile[8] , drilldown: 'settembre'},
                {name: 'Ottobre',  y: sommaMensile[9] , drilldown: 'ottobre'},
                {name: 'Novembre', y: sommaMensile[10] , drilldown: 'novembre'},
                {name: 'Dicembre', y: sommaMensile[11] , drilldown: 'dicembre'}
            ]}],
        drilldown: {
            breadcrumbs: {
                position: {align: 'right'}
            },
            series: [{
                    name: 'gennaio',
                    id: 'gennaio',
                    data: [
                        ['01/01', anno[0][0]],
                        ['02/01', anno[0][1]],
                        ['03/01', anno[0][2]],
                        ['04/01', anno[0][3]],
                        ['05/01', anno[0][4]],
                        ['06/01', anno[0][5]],
                        ['07/01', anno[0][6]],
                        ['08/01', anno[0][7]],
                        ['09/01', anno[0][8]],
                        ['10/01', anno[0][9]],
                        ['11/01', anno[0][10]],
                        ['12/01', anno[0][11]],
                        ['13/01', anno[0][12]],
                        ['14/01', anno[0][13]],
                        ['15/01', anno[0][14]],
                        ['16/01', anno[0][15]],
                        ['17/01', anno[0][16]],
                        ['18/01', anno[0][17]],
                        ['19/01', anno[0][18]],
                        ['20/01', anno[0][19]],
                        ['21/01', anno[0][20]],
                        ['22/01', anno[0][21]],
                        ['23/01', anno[0][22]],
                        ['24/01', anno[0][23]],
                        ['25/01', anno[0][24]],
                        ['26/01', anno[0][25]],
                        ['27/01', anno[0][26]],
                        ['28/01', anno[0][27]],
                        ['29/01', anno[0][28]],
                        ['30/01', anno[0][29]],
                        ['31/01', anno[0][30]]
                    ]}, {
                    name: 'febbraio',
                    id: 'febbraio',
                    data: [
                        ['01/02', anno[1][0]],
                        ['02/02', anno[1][1]],
                        ['03/02', anno[1][2]],
                        ['04/02', anno[1][4]],
                        ['05/02', anno[1][5]],
                        ['06/02', anno[1][6]],
                        ['07/02', anno[1][7]],
                        ['08/02', anno[1][8]],
                        ['09/02', anno[1][9]],
                        ['10/02', anno[1][10]],
                        ['11/02', anno[1][11]],
                        ['12/02', anno[1][12]],
                        ['13/02', anno[1][13]],
                        ['14/02', anno[1][14]],
                        ['15/02', anno[1][15]],
                        ['16/02', anno[1][16]],
                        ['17/02', anno[1][17]],
                        ['18/02', anno[1][18]],
                        ['19/02', anno[1][19]],
                        ['20/02', anno[1][20]],
                        ['21/02', anno[1][21]],
                        ['22/02', anno[1][22]],
                        ['23/02', anno[1][23]],
                        ['24/02', anno[1][24]],
                        ['25/02', anno[1][25]],
                        ['26/02', anno[1][26]],
                        ['27/02', anno[1][27]],
                        ['28/02', anno[1][28]],
                    ]}, {
                    name: 'marzo',
                    id: 'marzo',
                    data: [
                        ['01/03', anno[2][0]],
                        ['02/03', anno[2][1]],
                        ['03/03', anno[2][2]],
                        ['04/03', anno[2][4]],
                        ['05/03', anno[2][5]],
                        ['06/03', anno[2][6]],
                        ['07/03', anno[2][7]],
                        ['08/03', anno[2][8]],
                        ['09/03', anno[2][9]],
                        ['10/03', anno[2][10]],
                        ['11/03', anno[2][11]],
                        ['12/03', anno[2][12]],
                        ['13/03', anno[2][13]],
                        ['14/03', anno[2][14]],
                        ['15/03', anno[2][15]],
                        ['16/03', anno[2][16]],
                        ['17/03', anno[2][17]],
                        ['18/03', anno[2][18]],
                        ['19/03', anno[2][19]],
                        ['20/03', anno[2][20]],
                        ['21/03', anno[2][21]],
                        ['22/03', anno[2][22]],
                        ['23/03', anno[2][23]],
                        ['24/03', anno[2][24]],
                        ['25/03', anno[2][25]],
                        ['26/03', anno[2][26]],
                        ['27/03', anno[2][27]],
                        ['28/03', anno[2][28]],
                        ['29/03', anno[2][29]],
                        ['30/03', anno[2][30]],
                        ['31/03', anno[2][31]]
                    ]}, {
                    name: 'aprile',
                    id: 'aprile',
                    data: [
                        ['01/04', anno[3][0]],
                        ['02/04', anno[3][1]],
                        ['03/04', anno[3][2]],
                        ['04/04', anno[3][4]],
                        ['05/04', anno[3][5]],
                        ['06/04', anno[3][6]],
                        ['07/04', anno[3][7]],
                        ['08/04', anno[3][8]],
                        ['09/04', anno[3][9]],
                        ['10/04', anno[3][10]],
                        ['11/04', anno[3][11]],
                        ['12/04', anno[3][12]],
                        ['13/04', anno[3][13]],
                        ['14/04', anno[3][14]],
                        ['15/04', anno[3][15]],
                        ['16/04', anno[3][16]],
                        ['17/04', anno[3][17]],
                        ['18/04', anno[3][18]],
                        ['19/04', anno[3][19]],
                        ['20/04', anno[3][20]],
                        ['21/04', anno[3][21]],
                        ['22/04', anno[3][22]],
                        ['23/04', anno[3][23]],
                        ['24/04', anno[3][24]],
                        ['25/04', anno[3][25]],
                        ['26/04', anno[3][26]],
                        ['27/04', anno[3][27]],
                        ['28/04', anno[3][28]],
                        ['29/04', anno[3][29]],
                        ['30/04', anno[3][30]]
                    ]}, {
                    name: 'maggio',
                    id: 'maggio',
                    data: [
                        ['01/05', anno[4][0]],
                        ['02/05', anno[4][1]],
                        ['03/05', anno[4][2]],
                        ['04/05', anno[4][3]],
                        ['05/05', anno[4][4]],
                        ['06/05', anno[4][5]],
                        ['07/05', anno[4][6]],
                        ['08/05', anno[4][7]],
                        ['09/05', anno[4][8]],
                        ['10/05', anno[4][9]],
                        ['11/05', anno[4][10]],
                        ['12/05', anno[4][11]],
                        ['13/05', anno[4][12]],
                        ['14/05', anno[4][13]],
                        ['15/05', anno[4][14]],
                        ['16/05', anno[4][15]],
                        ['17/05', anno[4][16]],
                        ['18/05', anno[4][17]],
                        ['19/05', anno[4][18]],
                        ['20/05', anno[4][19]],
                        ['21/05', anno[4][20]],
                        ['22/05', anno[4][21]],
                        ['23/05', anno[4][22]],
                        ['24/05', anno[4][23]],
                        ['25/05', anno[4][24]],
                        ['26/05', anno[4][25]],
                        ['27/05', anno[4][26]],
                        ['28/05', anno[4][27]],
                        ['29/05', anno[4][28]],
                        ['30/05', anno[4][29]],
                        ['31/05', anno[4][30]]
                    ]}, {
                    name: 'giugno',
                    id: 'giugno',
                    data: [
                        ['01/06', anno[5][0]],
                        ['02/06', anno[5][1]],
                        ['03/06', anno[5][2]],
                        ['04/06', anno[5][4]],
                        ['05/06', anno[5][5]],
                        ['06/06', anno[5][6]],
                        ['07/06', anno[5][7]],
                        ['08/06', anno[5][8]],
                        ['09/06', anno[5][9]],
                        ['10/06', anno[5][10]],
                        ['11/06', anno[5][11]],
                        ['12/06', anno[5][12]],
                        ['13/06', anno[5][13]],
                        ['14/06', anno[5][14]],
                        ['15/06', anno[5][15]],
                        ['16/06', anno[5][16]],
                        ['17/06', anno[5][17]],
                        ['18/06', anno[5][18]],
                        ['19/06', anno[5][19]],
                        ['20/06', anno[5][20]],
                        ['21/06', anno[5][21]],
                        ['22/06', anno[5][22]],
                        ['23/06', anno[5][23]],
                        ['24/06', anno[5][24]],
                        ['25/06', anno[5][25]],
                        ['26/06', anno[5][26]],
                        ['27/06', anno[5][27]],
                        ['28/06', anno[5][28]],
                        ['29/06', anno[5][29]],
                        ['30/06', anno[5][30]],
                    ]}, {
                    name: 'luglio',
                    id: 'luglio',
                    data: [
                        ['01/07', anno[6][0]],
                        ['02/07', anno[6][1]],
                        ['03/07', anno[6][2]],
                        ['04/07', anno[6][4]],
                        ['05/07', anno[6][5]],
                        ['06/07', anno[6][6]],
                        ['07/07', anno[6][7]],
                        ['08/07', anno[6][8]],
                        ['09/07', anno[6][9]],
                        ['10/07', anno[6][10]],
                        ['11/07', anno[6][11]],
                        ['12/07', anno[6][12]],
                        ['13/07', anno[6][13]],
                        ['14/07', anno[6][14]],
                        ['15/07', anno[6][15]],
                        ['16/07', anno[6][16]],
                        ['17/07', anno[6][17]],
                        ['18/07', anno[6][18]],
                        ['19/07', anno[6][19]],
                        ['20/07', anno[6][20]],
                        ['21/07', anno[6][21]],
                        ['22/07', anno[6][22]],
                        ['23/07', anno[6][23]],
                        ['24/07', anno[6][24]],
                        ['25/07', anno[6][25]],
                        ['26/07', anno[6][26]],
                        ['27/07', anno[6][27]],
                        ['28/07', anno[6][28]],
                        ['29/07', anno[6][29]],
                        ['30/07', anno[6][30]],
                        ['31/07', anno[6][31]]
                    ]}, {
                    name: 'agosto',
                    id: 'agosto',
                    data: [
                        ['01/08', anno[7][0]],
                        ['02/08', anno[7][1]],
                        ['03/08', anno[7][2]],
                        ['04/08', anno[7][4]],
                        ['05/08', anno[7][5]],
                        ['06/08', anno[7][6]],
                        ['07/08', anno[7][7]],
                        ['08/08', anno[7][8]],
                        ['09/08', anno[7][9]],
                        ['10/08', anno[7][10]],
                        ['11/08', anno[7][11]],
                        ['12/08', anno[7][12]],
                        ['13/08', anno[7][13]],
                        ['14/08', anno[7][14]],
                        ['15/08', anno[7][15]],
                        ['16/08', anno[7][16]],
                        ['17/08', anno[7][17]],
                        ['18/08', anno[7][18]],
                        ['19/08', anno[7][19]],
                        ['20/08', anno[7][20]],
                        ['21/08', anno[7][21]],
                        ['22/08', anno[7][22]],
                        ['23/08', anno[7][23]],
                        ['24/08', anno[7][24]],
                        ['25/08', anno[7][25]],
                        ['26/08', anno[7][26]],
                        ['27/08', anno[7][27]],
                        ['28/08', anno[7][28]],
                        ['29/08', anno[7][29]],
                        ['30/08', anno[7][30]],
                        ['31/08', anno[7][31]]
                    ]}, {
                    name: 'settembre',
                    id: 'settembre',
                    data: [
                        ['01/09', anno[8][0]],
                        ['02/09', anno[8][1]],
                        ['03/09', anno[8][2]],
                        ['04/09', anno[8][4]],
                        ['05/09', anno[8][5]],
                        ['06/09', anno[8][6]],
                        ['07/09', anno[8][7]],
                        ['08/09', anno[8][8]],
                        ['09/09', anno[8][9]],
                        ['10/09', anno[8][10]],
                        ['11/09', anno[8][11]],
                        ['12/09', anno[8][12]],
                        ['13/09', anno[8][13]],
                        ['14/09', anno[8][14]],
                        ['15/09', anno[8][15]],
                        ['16/09', anno[8][16]],
                        ['17/09', anno[8][17]],
                        ['18/09', anno[8][18]],
                        ['19/09', anno[8][19]],
                        ['20/09', anno[8][20]],
                        ['21/09', anno[8][21]],
                        ['22/09', anno[8][22]],
                        ['23/09', anno[8][23]],
                        ['24/09', anno[8][24]],
                        ['25/09', anno[8][25]],
                        ['26/09', anno[8][26]],
                        ['27/09', anno[8][27]],
                        ['28/09', anno[8][28]],
                        ['29/09', anno[8][29]],
                        ['30/09', anno[8][30]]
                    ]}, {
                    name: 'ottobre',
                    id: 'ottobre',
                    data: [
                        ['01/10', anno[9][0]],
                        ['02/10', anno[9][1]],
                        ['03/10', anno[9][2]],
                        ['04/10', anno[9][4]],
                        ['05/10', anno[9][5]],
                        ['06/10', anno[9][6]],
                        ['07/10', anno[9][7]],
                        ['08/10', anno[9][8]],
                        ['09/10', anno[9][9]],
                        ['10/10', anno[9][10]],
                        ['11/10', anno[9][11]],
                        ['12/10', anno[9][12]],
                        ['13/10', anno[9][13]],
                        ['14/10', anno[9][14]],
                        ['15/10', anno[9][15]],
                        ['16/10', anno[9][16]],
                        ['17/10', anno[9][17]],
                        ['18/10', anno[9][18]],
                        ['19/10', anno[9][19]],
                        ['20/10', anno[9][20]],
                        ['21/10', anno[9][21]],
                        ['22/10', anno[9][22]],
                        ['23/10', anno[9][23]],
                        ['24/10', anno[9][24]],
                        ['25/10', anno[9][25]],
                        ['26/10', anno[9][26]],
                        ['27/10', anno[9][27]],
                        ['28/10', anno[9][28]],
                        ['29/10', anno[9][29]],
                        ['30/10', anno[9][30]],
                        ['31/10', anno[9][31]],
                    ]}, {
                    name: 'novembre',
                    id: 'novembre',
                    data: [
                        ['01/11', anno[10][0]],
                        ['02/11', anno[10][1]],
                        ['03/11', anno[10][2]],
                        ['04/11', anno[10][4]],
                        ['05/11', anno[10][5]],
                        ['06/11', anno[10][6]],
                        ['07/11', anno[10][7]],
                        ['08/11', anno[10][8]],
                        ['09/11', anno[10][9]],
                        ['10/11', anno[10][10]],
                        ['11/11', anno[10][11]],
                        ['12/11', anno[10][12]],
                        ['13/11', anno[10][13]],
                        ['14/11', anno[10][14]],
                        ['15/11', anno[10][15]],
                        ['16/11', anno[10][16]],
                        ['17/11', anno[10][17]],
                        ['18/11', anno[10][18]],
                        ['19/11', anno[10][19]],
                        ['20/11', anno[10][20]],
                        ['21/11', anno[10][21]],
                        ['22/11', anno[10][22]],
                        ['23/11', anno[10][23]],
                        ['24/11', anno[10][24]],
                        ['25/11', anno[10][25]],
                        ['26/11', anno[10][26]],
                        ['27/11', anno[10][27]],
                        ['28/11', anno[10][28]],
                        ['29/11', anno[10][29]],
                        ['30/11', anno[10][30]]
                    ]}, {
                    name: 'dicembre',
                    id: 'dicembre',
                    data: [
                        ['01/12', anno[11][0]],
                        ['02/12', anno[11][1]],
                        ['03/12', anno[11][2]],
                        ['04/12', anno[11][4]],
                        ['05/12', anno[11][5]],
                        ['06/12', anno[11][6]],
                        ['07/12', anno[11][7]],
                        ['08/12', anno[11][8]],
                        ['09/12', anno[11][9]],
                        ['10/12', anno[11][10]],
                        ['11/12', anno[11][11]],
                        ['12/12', anno[11][12]],
                        ['13/12', anno[11][13]],
                        ['14/12', anno[11][14]],
                        ['15/12', anno[11][15]],
                        ['16/12', anno[11][16]],
                        ['17/12', anno[11][17]],
                        ['18/12', anno[11][18]],
                        ['19/12', anno[11][19]],
                        ['20/12', anno[11][20]],
                        ['21/12', anno[11][21]],
                        ['22/12', anno[11][22]],
                        ['23/12', anno[11][23]],
                        ['24/12', anno[11][24]],
                        ['25/12', anno[11][25]],
                        ['26/12', anno[11][26]],
                        ['27/12', anno[11][27]],
                        ['28/12', anno[11][28]],
                        ['29/12', anno[11][29]],
                        ['30/12', anno[11][30]],
                        ['31/12', anno[11][31]]
                    ]},
            ]}
    });
}
////////////////////////////////////////////////////GRAFICI/////////////////////////////////////////////////////////////
