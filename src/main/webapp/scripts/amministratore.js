let utenti = document.querySelector("#utenti");                 //
let simpatizzanti = document.querySelector("#simpatizzanti");   //
let aderenti = document.querySelector("#aderenti");             // DIV delle varie sezioni da mostrare/nascondere
let visite = document.querySelector("#visite");                 //
let donations = document.querySelector("#donations");           //

let buttonUtenti = document.querySelector("#buttonUtenti");                 //
let buttonSimpatizzanti = document.querySelector("#buttonSimpatizzanti");   //
let buttonAderenti = document.querySelector("#buttonAderenti");             // Button delle varie sezioni da mostrare/nascondere
let buttonVisite = document.querySelector("#buttonVisite");                 // servono qui per cambiare il colore del bottone della sezione in cui siamo
let buttonDonations = document.querySelector("#buttonDonations");           //

function logout(){
    let xht = new XMLHttpRequest();
    xht.onreadystatechange = function()  {
        if(this.readyState == 4 && this.status == 200) {
            document.location.href = "home.jsp";        //funzione che riporta alla home ed effettua il logout informando l'utente
            window.alert("Logout effettuato con successo!");
        }
    }
    xht.open("POST", "/progettoteam19/ServletLogout", true); //faccio fare il logout vero e proprio alla ServletLogout
    xht.send();
}


function visualizzaUtenti(){
    utenti.hidden = false;
    stampaUtenti();
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = true;


    buttonUtenti.style.backgroundColor = "#A6B1E1";
    buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    buttonAderenti.style.backgroundColor = "#F4EEFF";
    buttonVisite.style.backgroundColor = "#F4EEFF";
    buttonDonations.style.backgroundColor = "#F4EEFF";
}

function visualizzaSimpatizzanti(){
    utenti.hidden = true;
    simpatizzanti.hidden = false;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = true;


    buttonUtenti.style.backgroundColor = "#F4EEFF";
    buttonSimpatizzanti.style.backgroundColor = "#A6B1E1";
    buttonAderenti.style.backgroundColor = "#F4EEFF";
    buttonVisite.style.backgroundColor = "#F4EEFF";
    buttonDonations.style.backgroundColor = "#F4EEFF";
}

function visualizzaAderenti(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = false;
    visite.hidden = true;
    donations.hidden = true;


    buttonUtenti.style.backgroundColor = "#F4EEFF";
    buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    buttonAderenti.style.backgroundColor = "#A6B1E1";
    buttonVisite.style.backgroundColor = "#F4EEFF";
    buttonDonations.style.backgroundColor = "#F4EEFF";
}

function visualizzaVisite(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = false;
    donations.hidden = true;


    buttonUtenti.style.backgroundColor = "#F4EEFF";
    buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    buttonAderenti.style.backgroundColor = "#F4EEFF";
    buttonVisite.style.backgroundColor = "#A6B1E1";
    buttonDonations.style.backgroundColor = "#F4EEFF";
}
function visualizzaDonations(){
    utenti.hidden = true;
    simpatizzanti.hidden = true;
    aderenti.hidden = true;
    visite.hidden = true;
    donations.hidden = false;


    buttonUtenti.style.backgroundColor = "#F4EEFF";
    buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    buttonAderenti.style.backgroundColor = "#F4EEFF";
    buttonVisite.style.backgroundColor = "#F4EEFF";
    buttonDonations.style.backgroundColor = "#A6B1E1";
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
// A point click event that uses the Renderer to draw a label next to the point
// On subsequent clicks, move the existing label instead of creating a new one.
Highcharts.addEvent(Highcharts.Point, 'click', function () {   //aggiunge l'evento che fa si che quando clicchi rimangano le informazioni fissate
    if (this.series.options.className.indexOf('popup-on-click') !== -1) {
        const chart = this.series.chart;
        const date = Highcharts.dateFormat('%A, %b %e, %Y', this.x);
        const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;

        const anchorX = this.plotX + this.series.xAxis.pos;
        const anchorY = this.plotY + this.series.yAxis.pos;
        const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right';
        const x = align === 'left' ? anchorX + 10 : anchorX - 10;
        const y = anchorY - 30;
        if (!chart.sticky) {
            chart.sticky = chart.renderer
                .label(text, x, y, 'callout',  anchorX, anchorY)
                .attr({
                    align,
                    fill: 'rgba(0, 0, 0, 0.75)',
                    padding: 10,
                    zIndex: 7 // Above series, below tooltip
                })
                .css({
                    color: 'white'
                })
                .on('click', function () {
                    chart.sticky = chart.sticky.destroy();
                })
                .add();
        } else {
            chart.sticky
                .attr({ align, text })
                .animate({ anchorX, anchorY, x, y }, { duration: 250 });
        }
    }
});

function getViewsData(){
    let d = [];

    for(let i=0; i<12;i++){
        //d[i] = unQualcheBean.sommaDonazioniMese[i]; TODO creare bean e popolarlo con i  dati del DB aggiornati
        //d[i] = [(10*i)+i - (i%3)*i*i,"2017-"+i+"-18 00:00:00"];
        d[i] = (10*i)+i - (i%2)*i*i;//valori più o meno a caso temporanei
    }
    return d;
}

function getViewsUserData(){

    let d = [];

    for(let i=0; i<12;i++){
        //d[i] = unQualcheBean.sommaDonazioniMese[i]; TODO creare bean e popolarlo con i  dati del DB aggiornati
        //d[i] = [(10*i)+i - (i%3)*i*i,"2017-"+i+"-18 00:00:00"];
        d[i] = (10*i)+i - (i%7)*i*i; //valori più o meno a caso temporanei
    }
    return d;
}



Highcharts.chart('GraficoVisite', {  //chiama la funzione della libreria chart che crea un grafico nel div con id ARG1 e con i dati nel JSON ARG2

    chart: {
        scrollablePlotArea: {
            minWidth: 700
        }
    },

    /*data: {
        csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
        beforeParse: function (csv) {
            return csv.replace(/\n\n/g, '\n');
        }
    },*/

    title: {
        text: 'Daily views at www.Tum4World.com',
        align: 'left'
    },

    subtitle: {
        text: 'Source: Tum4World Analytics',
        align: 'left'
    },

    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y-axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            className: 'popup-on-click',
            marker: {
                lineWidth: 1
            }
        }
    },

    series: [{
        name: 'users',
        lineWidth: 2,
        data: getViewsUserData()
        }, {
        name: 'views',
        lineWidth: 4,
        marker: {
            radius: 4
        },
        data: getViewsData()
    }
    /*,{
        name: 'month',
        data: ["2017-01-18 00:00:00","2017-02-18 00:00:00","2017-03-18 00:00:00","2017-04-18 00:00:00","2017-05-18 00:00:00","2017-06-18 00:00:00","2017-07-18 00:00:00","2017-08-18 00:00:00","2017-09-18 00:00:00","2017-10-18 00:00:00","2017-11-18 00:00:00","2017-12-18 00:00:00"]
    }*/
    ]
});

function getDonationData(){

    let d = [];

    for(let i=0; i<12;i++){
        //d[i] = unQualcheBean.sommaDonazioniMese[i]; TODO creare bean e popolarlo con i  dati del DB aggiornati
        d[i] = (10*i)+i - (i%3)*i*i; //valori più o meno a caso temporanei
    }

    //let t = ["2017-12-18 00:00:00","2017-12-19 00:00:00","2017-12-20 00:00:00","2017-12-21 00:00:00","2017-12-22 00:00:00","2017-12-23 00:00:00","2017-12-24 00:00:00",];
    return d;
}


Highcharts.chart('GraficoDonazioni', {  //chiama la funzione della libreria chart che crea un grafico nel div con id ARG1 e con i dati nel JSON ARG2

    chart: {
        scrollablePlotArea: {
            minWidth: 700
        }
    },

    /*data: {
        csvURL: './test.csv',
        beforeParse: function (csv) {    così si importano i dati da un file esterno ma non ci serve e comunque vada panta rei ah no scusate comunque non funziona
            return csv.replace(/\n\n/g, '\n');
        }
    },*/

    title: {
        text: 'Daily donations for www.Tum4World.com',
        align: 'left'
    },

    subtitle: {
        text: 'Source: Tum4World Analytics',
        align: 'left'
    },

    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y-axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            className: 'popup-on-click',
            marker: {
                lineWidth: 1
            }
        }
    },

    series: [{
        name: 'Donations',
        lineWidth: 4,
        marker: {
            radius: 4
        },
        data: getDonationData(),
    }]
});
////////////////////////////////////////////////////GRAFICI/////////////////////////////////////////////////////////////