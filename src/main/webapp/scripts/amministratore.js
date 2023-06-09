let utenti = document.querySelector("#utenti");                 //
let simpatizzanti = document.querySelector("#simpatizzanti");   //
let aderenti = document.querySelector("#aderenti");             // DIV delle varie sezioni da mostrare/nascondere
let visite = document.querySelector("#visite");                 //
let donations = document.querySelector("#donations");           //

function visualizzaUtenti(){
    if(utenti.hidden == true){
        utenti.hidden = false;
        stampaUtenti();
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
function stampaUtenti(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/ServletGetAllUsers", true);
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {

            console.log("ciao!")

            let my_JSON_array = this.response;

            let table = document.getElementById("output");

            var header = document.createElement("th");
            var testo = document.createTextNode("Username");
            header.appendChild(testo);
            table.appendChild(header);

            table.style.border = "1px solid";

            for (let i = 0; i < my_JSON_array.length; i++) {
                let current_JSON_object  = JSON.parse(my_JSON_array[i]);
                var tr = document.createElement("tr");
                var th = document.createElement("th");
                var text = document.createTextNode(current_JSON_object[i].username);
                th.appendChild(text);
                tr.appendChild(th);
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
            ['attivita1', Number(hitsAttivita1.innerText)],
            ['attivita2', Number(hitsAttivita2.innerText)],
            ['attivita3', Number(hitsAttivita3.innerText)],
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

// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
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
                {name: 'Gennaio', y: 142.89, drilldown: 'gennaio'},
                {name: 'Febbraio', y: 0.28, drilldown: 'febbraio'},
                {name: 'Marzo', y: 55, drilldown: 'marzo'},
                {name: 'Aprile', y: 12, drilldown: 'aprile'},
                {name: 'Maggio', y: 0, drilldown: 'maggio'},
                {name: 'Giugno', y: 0, drilldown: 'giugno'},
                {name: 'Luglio', y: 0, drilldown: 'luglio'},
                {name: 'Agosto', y: 0, drilldown: 'agosto'},
                {name: 'Settembre', y: 0, drilldown: 'settembre'},
                {name: 'Ottobre', y: 0, drilldown: 'ottobre'},
                {name: 'Novembre', y: 0, drilldown: 'novembre'},
                {name: 'Dicembre', y: 0, drilldown: 'dicembre'}
            ]}],
    drilldown: {
        breadcrumbs: {
            position: {align: 'right'}
        },
        series: [{
                name: 'gennaio',
                id: 'gennaio',
                data: [
                    ['01/01', 12],
                    ['02/01', 0],
                    ['03/01', 4],
                    ['04/01', 3],
                    ['05/01', 0],
                    ['06/01', 0],
                    ['07/01', 45],
                    ['08/01', 0],
                    ['09/01', 10],
                    ['10/01', 0],
                    ['11/01', 20],
                    ['12/01', 0],
                    ['13/01', 0],
                    ['14/01', 0],
                    ['15/01', 0],
                    ['16/01', 15],
                    ['17/01', 0],
                    ['18/01', 0],
                    ['19/01', 0],
                    ['20/01', 0],
                    ['21/01', 0],
                    ['22/01', 33.89],
                    ['23/01', 0],
                    ['24/01', 0],
                    ['25/01', 0],
                    ['26/01', 0],
                    ['27/01', 0],
                    ['28/01', 0],
                    ['29/01', 0],
                    ['30/01', 0],
                    ['31/01', 0]
                ]}, {
                name: 'febbraio',
                id: 'febbraio',
                data: [
                    ['01/02', 0],
                    ['02/02', 0],
                    ['03/02', 0],
                    ['04/02', 0],
                    ['05/02', 0],
                    ['06/02', 0],
                    ['07/02', 0],
                    ['08/02', 0],
                    ['09/02', 0],
                    ['10/02', 0],
                    ['11/02', 0],
                    ['12/02', 0],
                    ['13/02', 0],
                    ['14/02', 0],
                    ['15/02', 0],
                    ['16/02', 0],
                    ['17/02', 0],
                    ['18/02', 0],
                    ['19/02', 0],
                    ['20/02', 0],
                    ['21/02', 0],
                    ['22/02', 0],
                    ['23/02', 0],
                    ['24/02', 0],
                    ['25/02', 0],
                    ['26/02', 0],
                    ['27/02', 0],
                    ['28/02', 0],
                ]}, {
                name: 'marzo',
                id: 'marzo',
                data: [
                    ['01/03', 0],
                    ['02/03', 0],
                    ['03/03', 0],
                    ['04/03', 0],
                    ['05/03', 0],
                    ['06/03', 0],
                    ['07/03', 0],
                    ['08/03', 0],
                    ['09/03', 0],
                    ['10/03', 0],
                    ['11/03', 0],
                    ['12/03', 0],
                    ['13/03', 0],
                    ['14/03', 0],
                    ['15/03', 0],
                    ['16/03', 0],
                    ['17/03', 0],
                    ['18/03', 0],
                    ['19/03', 0],
                    ['20/03', 0],
                    ['21/03', 0],
                    ['22/03', 0],
                    ['23/03', 0],
                    ['24/03', 0],
                    ['25/03', 0],
                    ['26/03', 0],
                    ['27/03', 0],
                    ['28/03', 0],
                    ['29/03', 0],
                    ['30/03', 0],
                    ['31/03', 0]
                ]}, {
                name: 'aprile',
                id: 'aprile',
                data: [
                    ['01/04', 0],
                    ['02/04', 0],
                    ['03/04', 0],
                    ['04/04', 0],
                    ['05/04', 0],
                    ['06/04', 0],
                    ['07/04', 0],
                    ['08/04', 0],
                    ['09/04', 0],
                    ['10/04', 0],
                    ['11/04', 0],
                    ['12/04', 0],
                    ['13/04', 0],
                    ['14/04', 0],
                    ['15/04', 0],
                    ['16/04', 0],
                    ['17/04', 0],
                    ['18/04', 0],
                    ['19/04', 0],
                    ['20/04', 0],
                    ['21/04', 0],
                    ['22/04', 0],
                    ['23/04', 0],
                    ['24/04', 0],
                    ['25/04', 0],
                    ['26/04', 0],
                    ['27/04', 0],
                    ['28/04', 0],
                    ['29/04', 0],
                    ['30/04', 0]
                ]}, {
                name: 'maggio',
                id: 'maggio',
                data: [
                    ['01/05', 0],
                    ['02/05', 0],
                    ['03/05', 0],
                    ['04/05', 0],
                    ['05/05', 0],
                    ['06/05', 0],
                    ['07/05', 0],
                    ['08/05', 0],
                    ['09/05', 0],
                    ['10/05', 0],
                    ['11/05', 0],
                    ['12/05', 0],
                    ['13/05', 0],
                    ['14/05', 0],
                    ['15/05', 0],
                    ['16/05', 0],
                    ['17/05', 0],
                    ['18/05', 0],
                    ['19/05', 0],
                    ['20/05', 0],
                    ['21/05', 0],
                    ['22/05', 0],
                    ['23/05', 0],
                    ['24/05', 0],
                    ['25/05', 0],
                    ['26/05', 0],
                    ['27/05', 0],
                    ['28/05', 0],
                    ['29/05', 0],
                    ['30/05', 0],
                    ['31/05', 0]
                ]}, {
                name: 'giugno',
                id: 'giugno',
                data: [
                    ['01/06', 0],
                    ['02/06', 0],
                    ['03/06', 0],
                    ['04/06', 0],
                    ['05/06', 0],
                    ['06/06', 0],
                    ['07/06', 0],
                    ['08/06', 0],
                    ['09/06', 0],
                    ['10/06', 0],
                    ['11/06', 0],
                    ['12/06', 0],
                    ['13/06', 0],
                    ['14/06', 0],
                    ['15/06', 0],
                    ['16/06', 0],
                    ['17/06', 0],
                    ['18/06', 0],
                    ['19/06', 0],
                    ['20/06', 0],
                    ['21/06', 0],
                    ['22/06', 0],
                    ['23/06', 0],
                    ['24/06', 0],
                    ['25/06', 0],
                    ['26/06', 0],
                    ['27/06', 0],
                    ['28/06', 0],
                    ['29/06', 0],
                    ['30/06', 0],
                ]}, {
                name: 'luglio',
                id: 'luglio',
                data: [
                    ['01/07', 0],
                    ['02/07', 0],
                    ['03/07', 0],
                    ['04/07', 0],
                    ['05/07', 0],
                    ['06/07', 0],
                    ['07/07', 0],
                    ['08/07', 0],
                    ['09/07', 0],
                    ['10/07', 0],
                    ['11/07', 0],
                    ['12/07', 0],
                    ['13/07', 0],
                    ['14/07', 0],
                    ['15/07', 0],
                    ['16/07', 0],
                    ['17/07', 0],
                    ['18/07', 0],
                    ['19/07', 0],
                    ['20/07', 0],
                    ['21/07', 0],
                    ['22/07', 0],
                    ['23/07', 0],
                    ['24/07', 0],
                    ['25/07', 0],
                    ['26/07', 0],
                    ['27/07', 0],
                    ['28/07', 0],
                    ['29/07', 0],
                    ['30/07', 0],
                    ['31/07', 0]
                ]}, {
                name: 'agosto',
                id: 'agosto',
                data: [
                    ['01/08', 0],
                    ['02/08', 0],
                    ['03/08', 0],
                    ['04/08', 0],
                    ['05/08', 0],
                    ['06/08', 0],
                    ['07/08', 0],
                    ['08/08', 0],
                    ['09/08', 0],
                    ['10/08', 0],
                    ['11/08', 0],
                    ['12/08', 0],
                    ['13/08', 0],
                    ['14/08', 0],
                    ['15/08', 0],
                    ['16/08', 0],
                    ['17/08', 0],
                    ['18/08', 0],
                    ['19/08', 0],
                    ['20/08', 0],
                    ['21/08', 0],
                    ['22/08', 0],
                    ['23/08', 0],
                    ['24/08', 0],
                    ['25/08', 0],
                    ['26/08', 0],
                    ['27/08', 0],
                    ['28/08', 0],
                    ['29/08', 0],
                    ['30/08', 0],
                    ['31/08', 0]
                ]}, {
                name: 'settembre',
                id: 'settembre',
                data: [
                    ['01/09', 0],
                    ['02/09', 0],
                    ['03/09', 0],
                    ['04/09', 0],
                    ['05/09', 0],
                    ['06/09', 0],
                    ['07/09', 0],
                    ['08/09', 0],
                    ['09/09', 0],
                    ['10/09', 0],
                    ['11/09', 0],
                    ['12/09', 0],
                    ['13/09', 0],
                    ['14/09', 0],
                    ['15/09', 0],
                    ['16/09', 0],
                    ['17/09', 0],
                    ['18/09', 0],
                    ['19/09', 0],
                    ['20/09', 0],
                    ['21/09', 0],
                    ['22/09', 0],
                    ['23/09', 0],
                    ['24/09', 0],
                    ['25/09', 0],
                    ['26/09', 0],
                    ['27/09', 0],
                    ['28/09', 0],
                    ['29/09', 0],
                    ['30/09', 0]
                ]}, {
                name: 'ottobre',
                id: 'ottobre',
                data: [
                    ['01/10', 0],
                    ['02/10', 0],
                    ['03/10', 0],
                    ['04/10', 0],
                    ['05/10', 0],
                    ['06/10', 0],
                    ['07/10', 0],
                    ['08/10', 0],
                    ['09/10', 0],
                    ['10/10', 0],
                    ['11/10', 0],
                    ['12/10', 0],
                    ['13/10', 0],
                    ['14/10', 0],
                    ['15/10', 0],
                    ['16/10', 0],
                    ['17/10', 0],
                    ['18/10', 0],
                    ['19/10', 0],
                    ['20/10', 0],
                    ['21/10', 0],
                    ['22/10', 0],
                    ['23/10', 0],
                    ['24/10', 0],
                    ['25/10', 0],
                    ['26/10', 0],
                    ['27/10', 0],
                    ['28/10', 0],
                    ['29/10', 0],
                    ['30/10', 0],
                    ['31/10', 0],
                ]}, {
                name: 'novembre',
                id: 'novembre',
                data: [
                    ['01/11', 0],
                    ['02/11', 0],
                    ['03/11', 0],
                    ['04/11', 0],
                    ['05/11', 0],
                    ['06/11', 0],
                    ['07/11', 0],
                    ['08/11', 0],
                    ['09/11', 0],
                    ['10/11', 0],
                    ['11/11', 0],
                    ['12/11', 0],
                    ['13/11', 0],
                    ['14/11', 0],
                    ['15/11', 0],
                    ['16/11', 0],
                    ['17/11', 0],
                    ['18/11', 0],
                    ['19/11', 0],
                    ['20/11', 0],
                    ['21/11', 0],
                    ['22/11', 0],
                    ['23/11', 0],
                    ['24/11', 0],
                    ['25/11', 0],
                    ['26/11', 0],
                    ['27/11', 0],
                    ['28/11', 0],
                    ['29/11', 0],
                    ['30/11', 0]
                ]}, {
                name: 'dicembre',
                id: 'dicembre',
                data: [
                    ['01/12', 0],
                    ['02/12', 0],
                    ['03/12', 0],
                    ['04/12', 0],
                    ['05/12', 0],
                    ['06/12', 0],
                    ['07/12', 0],
                    ['08/12', 0],
                    ['09/12', 0],
                    ['10/12', 0],
                    ['11/12', 0],
                    ['12/12', 0],
                    ['13/12', 0],
                    ['14/12', 0],
                    ['15/12', 0],
                    ['16/12', 0],
                    ['17/12', 0],
                    ['18/12', 0],
                    ['19/12', 0],
                    ['20/12', 0],
                    ['21/12', 0],
                    ['22/12', 0],
                    ['23/12', 0],
                    ['24/12', 0],
                    ['25/12', 0],
                    ['26/12', 0],
                    ['27/12', 0],
                    ['28/12', 0],
                    ['29/12', 0],
                    ['30/12', 0],
                    ['31/12', 0]//TODO cliccable ma allineati al centro quelli tutti a zero o non cliccabili?
                ]},
        ]}
});
////////////////////////////////////////////////////GRAFICI/////////////////////////////////////////////////////////////