let utenti = document.querySelector("#utenti");                 //
let simpatizzanti = document.querySelector("#simpatizzanti");   //
let aderenti = document.querySelector("#aderenti");             // DIV delle varie sezioni da mostrare/nascondere
let visite = document.querySelector("#visite");                 //
let donations = document.querySelector("#donations");           //
let defDiv = document.querySelector("#default");                //

let buttonUtenti = document.querySelector("#buttonUtenti");                 //
let buttonSimpatizzanti = document.querySelector("#buttonSimpatizzanti");   //
let buttonAderenti = document.querySelector("#buttonAderenti");             // Button delle varie sezioni da mostrare/nascondere
let buttonVisite = document.querySelector("#buttonVisite");                 // servono qui per cambiare il colore del bottone della sezione in cui siamo
let buttonDonations = document.querySelector("#buttonDonations");           //

function visualizzaUtenti(){
    if(utenti.hidden == true){
        utenti.hidden = false;
        stampaUtenti();
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = true;
        donations.hidden = true;
        defDiv.hidden = true;


        buttonUtenti.style.backgroundColor = "#A6B1E1";
        buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
        buttonAderenti.style.backgroundColor = "#F4EEFF";
        buttonVisite.style.backgroundColor = "#F4EEFF";
        buttonDonations.style.backgroundColor = "#F4EEFF";
    } else {
        utenti.hidden = true;
        buttonUtenti.style.backgroundColor = "#F4EEFF";
        defDiv.hidden = false;
    }
}

function visualizzaSimpatizzanti(){
    if(simpatizzanti.hidden == true){
        utenti.hidden = true;
        simpatizzanti.hidden = false;
        aderenti.hidden = true;
        visite.hidden = true;
        donations.hidden = true;
        defDiv.hidden = true;


        buttonUtenti.style.backgroundColor = "#F4EEFF";
        buttonSimpatizzanti.style.backgroundColor = "#A6B1E1";
        buttonAderenti.style.backgroundColor = "#F4EEFF";
        buttonVisite.style.backgroundColor = "#F4EEFF";
        buttonDonations.style.backgroundColor = "#F4EEFF";
    } else {
        simpatizzanti.hidden = true;
        buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
        defDiv.hidden = false;
    }

}

function visualizzaAderenti(){
    if(aderenti.hidden == true){
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = false;
        visite.hidden = true;
        donations.hidden = true;
        defDiv.hidden = true;


        buttonUtenti.style.backgroundColor = "#F4EEFF";
        buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
        buttonAderenti.style.backgroundColor = "#A6B1E1";
        buttonVisite.style.backgroundColor = "#F4EEFF";
        buttonDonations.style.backgroundColor = "#F4EEFF";
    } else {
        aderenti.hidden = true;
        buttonAderenti.style.backgroundColor = "#F4EEFF";
        defDiv.hidden = false;
    }

}

function visualizzaVisite(){
    if(visite.hidden == true){
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = false;
        donations.hidden = true;
        defDiv.hidden = true;


        buttonUtenti.style.backgroundColor = "#F4EEFF";
        buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
        buttonAderenti.style.backgroundColor = "#F4EEFF";
        buttonVisite.style.backgroundColor = "#A6B1E1";
        buttonDonations.style.backgroundColor = "#F4EEFF";
    } else {
        visite.hidden = true;
        buttonVisite.style.backgroundColor = "#F4EEFF";
        defDiv.hidden = false;
    }

}

function visualizzaDonations(){
    if(donations.hidden == true){
        utenti.hidden = true;
        simpatizzanti.hidden = true;
        aderenti.hidden = true;
        visite.hidden = true;
        donations.hidden = false;
        defDiv.hidden = true;

        buttonUtenti.style.backgroundColor = "#F4EEFF";
        buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
        buttonAderenti.style.backgroundColor = "#F4EEFF";
        buttonVisite.style.backgroundColor = "#F4EEFF";
        buttonDonations.style.backgroundColor = "#A6B1E1";
    } else {
        donations.hidden = true;
        buttonDonations.style.backgroundColor = "#F4EEFF";
        defDiv.hidden = false;
    }

}

function showOrHide(id){
    let idDati = "#info"+id;
    let dati = document.querySelector(idDati);

    dati.hidden = !dati.hidden;

}
function stampaUtenti(){  //TODO faccio la stessa cosa per aderenti e simpatizzanti
    //TODO passo alla servlet che accede al DB e mi mette in un BEAN tutti i dati(pubblici) di tutti gli utenti e poi devo in qualche modo aggiungerli tipo:
    //
    // let utenti = document.querySelector("#utenti");
    // for(utente in BEAN){
    //    counterUtenti++
    //    let idUtente = "Utente"+counterUtenti;
    //    let idInfoUtente = "info"+idUtente;
    //    utenti.content += "<div onclick=\"showOrHide(this.id);\" id=\""+idUtente+"\">"+utente.name+"</div>
    //                         <div id=\""+idInfoUtente+"\" hidden=\"true\">
    //                          <p> DATI UTENTE PRESI DAL BEAN </p>
    //                          </div>"
    // }
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
        type: 'column'
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
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}€</b><br/>'
    },

    series: [
        {
            name: 'Donations',
            colorByPoint: true,
            data: [
                {
                    name: 'Gennaio',
                    y: 63.06,
                    drilldown: 'gennaio'
                },
                {
                    name: 'Febbraio',
                    y: 19.84,
                    drilldown: 'febbraio'
                },
                {
                    name: 'Marzo',
                    y: 4.18,
                    drilldown: 'marzo'
                },
                {
                    name: 'Aprile',
                    y: 4.12,
                    drilldown: 'aprile'
                },
                {
                    name: 'Maggio',
                    y: 2.33,
                    drilldown: 'maggio'
                },
                {
                    name: 'Giugno',
                    y: 0.45,
                    drilldown: 'giugno'
                },
                {
                    name: 'Luglio',
                    y: 1.582,
                    drilldown: 'luglio'
                },
                {
                    name: 'Agosto',
                    y: 1.582,
                    drilldown: 'agosto'
                },
                {
                    name: 'Settembre',
                    y: 1.582,
                    drilldown: 'settembre'
                },
                {
                    name: 'Ottobre',
                    y: 1.582,
                    drilldown: 'ottobre'
                },
                {
                    name: 'Novembre',
                    y: 1.582,
                    drilldown: 'novembre'
                },
                {
                    name: 'Dicembre',
                    y: 1.582,
                    drilldown: 'dicembre'
                }

            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
                name: 'gennaio',
                id: 'gennaio',
                data: [
                    ['01/01', 0.1],
                    ['02/01', 0.1],
                    ['03/01', 0.1],
                    ['04/01', 0.1],
                    ['05/01', 0.1],
                    ['06/01', 0.1],
                    ['07/01', 0.1],
                    ['08/01', 0.1],
                    ['09/01', 0.1],
                    ['10/01', 0.1],
                    ['11/01', 0.1],
                    ['12/01', 0.1],
                    ['13/01', 0.1],
                    ['14/01', 0.1],
                    ['15/01', 0.1],
                    ['16/01', 0.1],
                    ['17/01', 0.1],
                    ['18/01', 0.1],
                    ['19/01', 0.1],
                    ['20/01', 0.1],
                    ['21/01', 0.1],
                    ['22/01', 0.1],
                    ['23/01', 0.1],
                    ['24/01', 0.1],
                    ['25/01', 0.1],
                    ['26/01', 0.1],
                    ['27/01', 0.1],
                    ['28/01', 0.1],
                    ['29/01', 0.1],
                    ['30/01', 0.1],
                    ['31/01', 0.1]
                ]},
            {
                name: 'febbraio',
                id: 'febbraio',
                data: [
                    ['01/02', 0.1],
                    ['02/02', 0.1],
                    ['03/02', 0.1],
                    ['04/02', 0.1],
                    ['05/02', 0.1],
                    ['06/02', 0.1],
                    ['07/02', 0.1],
                    ['08/02', 0.1],
                    ['09/02', 0.1],
                    ['10/02', 0.1],
                    ['11/02', 0.1],
                    ['12/02', 0.1],
                    ['13/02', 0.1],
                    ['14/02', 0.1],
                    ['15/02', 0.1],
                    ['16/02', 0.1],
                    ['17/02', 0.1],
                    ['18/02', 0.1],
                    ['19/02', 0.1],
                    ['20/02', 0.1],
                    ['21/02', 0.1],
                    ['22/02', 0.1],
                    ['23/02', 0.1],
                    ['24/02', 0.1],
                    ['25/02', 0.1],
                    ['26/02', 0.1],
                    ['27/02', 0.1],
                    ['28/02', 0.1],
                ]},
            {
                name: 'marzo',
                id: 'marzo',
                data: [
                    ['01/03', 0.1],
                    ['02/03', 0.1],
                    ['03/03', 0.1],
                    ['04/03', 0.1],
                    ['05/03', 0.1],
                    ['06/03', 0.1],
                    ['07/03', 0.1],
                    ['08/03', 0.1],
                    ['09/03', 0.1],
                    ['10/03', 0.1],
                    ['11/03', 0.1],
                    ['12/03', 0.1],
                    ['13/03', 0.1],
                    ['14/03', 0.1],
                    ['15/03', 0.1],
                    ['16/03', 0.1],
                    ['17/03', 0.1],
                    ['18/03', 0.1],
                    ['19/03', 0.1],
                    ['20/03', 0.1],
                    ['21/03', 0.1],
                    ['22/03', 0.1],
                    ['23/03', 0.1],
                    ['24/03', 0.1],
                    ['25/03', 0.1],
                    ['26/03', 0.1],
                    ['27/03', 0.1],
                    ['28/03', 0.1],
                    ['29/03', 0.1],
                    ['30/03', 0.1],
                    ['31/03', 0.1]
                ]},
            {
                name: 'aprile',
                id: 'aprile',
                data: [
                    ['01/04', 0.1],
                    ['02/04', 0.1],
                    ['03/04', 0.1],
                    ['04/04', 0.1],
                    ['05/04', 0.1],
                    ['06/04', 0.1],
                    ['07/04', 0.1],
                    ['08/04', 0.1],
                    ['09/04', 0.1],
                    ['10/04', 0.1],
                    ['11/04', 0.1],
                    ['12/04', 0.1],
                    ['13/04', 0.1],
                    ['14/04', 0.1],
                    ['15/04', 0.1],
                    ['16/04', 0.1],
                    ['17/04', 0.1],
                    ['18/04', 0.1],
                    ['19/04', 0.1],
                    ['20/04', 0.1],
                    ['21/04', 0.1],
                    ['22/04', 0.1],
                    ['23/04', 0.1],
                    ['24/04', 0.1],
                    ['25/04', 0.1],
                    ['26/04', 0.1],
                    ['27/04', 0.1],
                    ['28/04', 0.1],
                    ['29/04', 0.1],
                    ['30/04', 0.1]
                ]},
            {
                name: 'maggio',
                id: 'maggio',
                data: [
                    ['01/05', 0.1],
                    ['02/05', 0.1],
                    ['03/05', 0.1],
                    ['04/05', 0.1],
                    ['05/05', 0.1],
                    ['06/05', 0.1],
                    ['07/05', 0.1],
                    ['08/05', 0.1],
                    ['09/05', 0.1],
                    ['10/05', 0.1],
                    ['11/05', 0.1],
                    ['12/05', 0.1],
                    ['13/05', 0.1],
                    ['14/05', 0.1],
                    ['15/05', 0.1],
                    ['16/05', 0.1],
                    ['17/05', 0.1],
                    ['18/05', 0.1],
                    ['19/05', 0.1],
                    ['20/05', 0.1],
                    ['21/05', 0.1],
                    ['22/05', 0.1],
                    ['23/05', 0.1],
                    ['24/05', 0.1],
                    ['25/05', 0.1],
                    ['26/05', 0.1],
                    ['27/05', 0.1],
                    ['28/05', 0.1],
                    ['29/05', 0.1],
                    ['30/05', 0.1],
                    ['31/05', 0.1]
                ]},
            {
                name: 'giugno',
                id: 'giugno',
                data: [
                    ['01/06', 0.1],
                    ['02/06', 0.1],
                    ['03/06', 0.1],
                    ['04/06', 0.1],
                    ['05/06', 0.1],
                    ['06/06', 0.1],
                    ['07/06', 0.1],
                    ['08/06', 0.1],
                    ['09/06', 0.1],
                    ['10/06', 0.1],
                    ['11/06', 0.1],
                    ['12/06', 0.1],
                    ['13/06', 0.1],
                    ['14/06', 0.1],
                    ['15/06', 0.1],
                    ['16/06', 0.1],
                    ['17/06', 0.1],
                    ['18/06', 0.1],
                    ['19/06', 0.1],
                    ['20/06', 0.1],
                    ['21/06', 0.1],
                    ['22/06', 0.1],
                    ['23/06', 0.1],
                    ['24/06', 0.1],
                    ['25/06', 0.1],
                    ['26/06', 0.1],
                    ['27/06', 0.1],
                    ['28/06', 0.1],
                    ['29/06', 0.1],
                    ['30/06', 0.1],
                ]},
            {
                name: 'luglio',
                id: 'luglio',
                data: [
                    ['01/07', 0.1],
                    ['02/07', 0.1],
                    ['03/07', 0.1],
                    ['04/07', 0.1],
                    ['05/07', 0.1],
                    ['06/07', 0.1],
                    ['07/07', 0.1],
                    ['08/07', 0.1],
                    ['09/07', 0.1],
                    ['10/07', 0.1],
                    ['11/07', 0.1],
                    ['12/07', 0.1],
                    ['13/07', 0.1],
                    ['14/07', 0.1],
                    ['15/07', 0.1],
                    ['16/07', 0.1],
                    ['17/07', 0.1],
                    ['18/07', 0.1],
                    ['19/07', 0.1],
                    ['20/07', 0.1],
                    ['21/07', 0.1],
                    ['22/07', 0.1],
                    ['23/07', 0.1],
                    ['24/07', 0.1],
                    ['25/07', 0.1],
                    ['26/07', 0.1],
                    ['27/07', 0.1],
                    ['28/07', 0.1],
                    ['29/07', 0.1],
                    ['30/07', 0.1],
                    ['31/07', 0.1]
                ]},
            {
                name: 'agosto',
                id: 'agosto',
                data: [
                    ['01/08', 0.1],
                    ['02/08', 0.1],
                    ['03/08', 0.1],
                    ['04/08', 0.1],
                    ['05/08', 0.1],
                    ['06/08', 0.1],
                    ['07/08', 0.1],
                    ['08/08', 0.1],
                    ['09/08', 0.1],
                    ['10/08', 0.1],
                    ['11/08', 0.1],
                    ['12/08', 0.1],
                    ['13/08', 0.1],
                    ['14/08', 0.1],
                    ['15/08', 0.1],
                    ['16/08', 0.1],
                    ['17/08', 0.1],
                    ['18/08', 0.1],
                    ['19/08', 0.1],
                    ['20/08', 0.1],
                    ['21/08', 0.1],
                    ['22/08', 0.1],
                    ['23/08', 0.1],
                    ['24/08', 0.1],
                    ['25/08', 0.1],
                    ['26/08', 0.1],
                    ['27/08', 0.1],
                    ['28/08', 0.1],
                    ['29/08', 0.1],
                    ['30/08', 0.1],
                    ['31/08', 0.1]
                ]},
            {
                name: 'settembre',
                id: 'settembre',
                data: [
                    ['01/09', 0.1],
                    ['02/09', 0.1],
                    ['03/09', 0.1],
                    ['04/09', 0.1],
                    ['05/09', 0.1],
                    ['06/09', 0.1],
                    ['07/09', 0.1],
                    ['08/09', 0.1],
                    ['09/09', 0.1],
                    ['10/09', 0.1],
                    ['11/09', 0.1],
                    ['12/09', 0.1],
                    ['13/09', 0.1],
                    ['14/09', 0.1],
                    ['15/09', 0.1],
                    ['16/09', 0.1],
                    ['17/09', 0.1],
                    ['18/09', 0.1],
                    ['19/09', 0.1],
                    ['20/09', 0.1],
                    ['21/09', 0.1],
                    ['22/09', 0.1],
                    ['23/09', 0.1],
                    ['24/09', 0.1],
                    ['25/09', 0.1],
                    ['26/09', 0.1],
                    ['27/09', 0.1],
                    ['28/09', 0.1],
                    ['29/09', 0.1],
                    ['30/09', 0.1]
                ]},
            {
                name: 'ottobre',
                id: 'ottobre',
                data: [
                    ['01/10', 0.1],
                    ['02/10', 0.1],
                    ['03/10', 0.1],
                    ['04/10', 0.1],
                    ['05/10', 0.1],
                    ['06/10', 0.1],
                    ['07/10', 0.1],
                    ['08/10', 0.1],
                    ['09/10', 0.1],
                    ['10/10', 0.1],
                    ['11/10', 0.1],
                    ['12/10', 0.1],
                    ['13/10', 0.1],
                    ['14/10', 0.1],
                    ['15/10', 0.1],
                    ['16/10', 0.1],
                    ['17/10', 0.1],
                    ['18/10', 0.1],
                    ['19/10', 0.1],
                    ['20/10', 0.1],
                    ['21/10', 0.1],
                    ['22/10', 0.1],
                    ['23/10', 0.1],
                    ['24/10', 0.1],
                    ['25/10', 0.1],
                    ['26/10', 0.1],
                    ['27/10', 0.1],
                    ['28/10', 0.1],
                    ['29/10', 0.1],
                    ['30/10', 0.1],
                    ['31/10', 0.1],
                ]},
            {
                name: 'novembre',
                id: 'novembre',
                data: [
                    ['01/11', 0.1],
                    ['02/11', 0.1],
                    ['03/11', 0.1],
                    ['04/11', 0.1],
                    ['05/11', 0.1],
                    ['06/11', 0.1],
                    ['07/11', 0.1],
                    ['08/11', 0.1],
                    ['09/11', 0.1],
                    ['10/11', 0.1],
                    ['11/11', 0.1],
                    ['12/11', 0.1],
                    ['13/11', 0.1],
                    ['14/11', 0.1],
                    ['15/11', 0.1],
                    ['16/11', 0.1],
                    ['17/11', 0.1],
                    ['18/11', 0.1],
                    ['19/11', 0.1],
                    ['20/11', 0.1],
                    ['21/11', 0.1],
                    ['22/11', 0.1],
                    ['23/11', 0.1],
                    ['24/11', 0.1],
                    ['25/11', 0.1],
                    ['26/11', 0.1],
                    ['27/11', 0.1],
                    ['28/11', 0.1],
                    ['29/11', 0.1],
                    ['30/11', 0.1]
                ]},
            {
                name: 'dicembre',
                id: 'dicembre',
                data: [
                    ['01/12', 0.1],
                    ['02/12', 0.1],
                    ['03/12', 0.1],
                    ['04/12', 0.1],
                    ['05/12', 0.1],
                    ['06/12', 0.1],
                    ['07/12', 0.1],
                    ['08/12', 0.1],
                    ['09/12', 0.1],
                    ['10/12', 0.1],
                    ['11/12', 0.1],
                    ['12/12', 0.1],
                    ['13/12', 0.1],
                    ['14/12', 0.1],
                    ['15/12', 0.1],
                    ['16/12', 0.1],
                    ['17/12', 0.1],
                    ['18/12', 0.1],
                    ['19/12', 0.1],
                    ['20/12', 0.1],
                    ['21/12', 0.1],
                    ['22/12', 0.1],
                    ['23/12', 0.1],
                    ['24/12', 0.1],
                    ['25/12', 0.1],
                    ['26/12', 0.1],
                    ['27/12', 0.1],
                    ['28/12', 0.1],
                    ['29/12', 0.1],
                    ['30/12', 0.1],
                    ['31/12', 0.1]
                ]},

        ]
    }
});

////////////////////////////////////////////////////GRAFICI/////////////////////////////////////////////////////////////