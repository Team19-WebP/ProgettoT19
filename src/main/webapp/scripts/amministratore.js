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

function visualizzaUtenti(){
    if(utenti.hidden == true){
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
    } else {
        utenti.hidden = true;
        buttonUtenti.style.backgroundColor = "#F4EEFF";
    }
}

function visualizzaSimpatizzanti(){
    if(simpatizzanti.hidden == true){
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
    } else {
        simpatizzanti.hidden = true;
        buttonSimpatizzanti.style.backgroundColor = "#F4EEFF";
    }

}

function visualizzaAderenti(){
    if(aderenti.hidden == true){
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
    } else {
        aderenti.hidden = true;
        buttonAderenti.style.backgroundColor = "#F4EEFF";
    }

}

function visualizzaVisite(){
    if(visite.hidden == true){
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
    } else {
        visite.hidden = true;
        buttonVisite.style.backgroundColor = "#F4EEFF";
    }

}
function visualizzaDonations(hits,hitsHome,hitsLogin,hits){
    if(donations.hidden == true){
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
    } else {
        donations.hidden = true;
        buttonDonations.style.backgroundColor = "#F4EEFF";
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
Highcharts.chart('GraficoVisite', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Visite per pagina al sito'
    },
    subtitle: {
        text: 'Source: Tum4World.com'
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
            '#00ffff', '#ff00ff', '#008000', '#dc143c', '#0000ff', '#808080',
            '#ffff00', '#d2691e', '#533be1', '#4c46db', '#00ff00', '#800000',
            '#808000', '#db7093', '#ff69b4', '#daa520'
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
            ['Visite totali', 37.33],
            ['home', 31.18],
            ['attivita', 27.79],
            ['attivita1', 22.23],
            ['attivita2', 21.91],
            ['attivita3', 21.74],
            ['chiSiamo', 21.32],
            ['contatti', 20.89],
            ['conferma contatti', 20.67],
            ['sign-in', 19.11],
            ['conferma sign-in', 16.45],
            ['login', 16.38],
            ['logout', 15.41],
            ['aderente', 15.25],
            ['simpatizzante', 14.974],
            ['amministratore', 14.970],
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