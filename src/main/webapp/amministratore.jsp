<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:useBean id="counterAmministratore" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterAmministratore" property="hits" value="0"/>

<main>
  <jsp:include page="frasiIspiranti.jsp"></jsp:include>
  <div class="containerAmministratore">
  <div class="menu2">
    <nav>
      <button onclick="visualizzaUtenti();" id="buttonUtenti">elenco di tutti gli utenti</button>
      <button onclick="visualizzaSimpatizzanti();" id="buttonSimpatizzanti">elenco di tutti i simpatizzanti</button>
      <button onclick="visualizzaAderenti();" id="buttonAderenti">elenco di tutti gli aderenti</button>
      <button onclick="visualizzaVisite();" id="buttonVisite" >statistiche visite al sito</button>
      <button onclick="visualizzaDonations();" id="buttonDonations">statistiche donazioni</button>
    </nav>
  </div>

    <div id="utenti" hidden="true">
      <br>
      <br>

      <table id="all">

      </table>
      <p id="noall" hidden = "true">
        Nessun utente presente
      </p>
    </div>

    <div id="simpatizzanti" hidden="true">
      <br>
      <br>

      <table id="simpatizzante">

      </table>
      <p id="nosimpatizzante" hidden = "true">
        Nessun utente 'simpatizzante' presente
      </p>
    </div>

    <div id="aderenti" hidden="true">
      <br>
      <br>

      <table id="aderente">

      </table>
      <p id="noaderente" hidden = "true">
        Nessun utente 'aderente' presente
      </p>
    </div>

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>      <%--vari script delle librerie necessari per la visualizzazione dei grafici--%>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script> <%--questo nello specifico è essenziale--%>

    <div id="contatoreVisite" hidden="true"> Visite sito: <b></b> </div>
    <div id="visite" hidden="true">
      <br>
      <div id="grafico visite">

        <figure class="highcharts-figure">
          <div id="GraficoVisite"></div>
          <p class="highcharts-description">
            Grafico che mostra in numero di visite a ogni pagina del sito dall'ultima volta che sono stati resettati i contatori.
            Per resettarli nuovamente premere il bottone sottostante.
          </p>
        </figure>
      </div>
      <form action= <%= response.encodeURL("ServletReset")%> method="get">
        <input id="resetCount" type="submit" value="RESET">
      </form>
    </div>

    <div id="totaleDonazioni" hidden="true"></div>
    <div id="donations" hidden="true">


      <script src="https://code.highcharts.com/modules/drilldown.js"></script>

      <figure class="highcharts-figure">
        <div id="GraficoDonazioni"></div>
        <p class="highcharts-description">
          Grafico che mostra le donazioni al sito durante il 2023 suddivise per mese.
          Cliccando una singola colonna si possono avere ulteriori informazioni sulle donazioni di tale mese.
        </p>
      </figure>

    </div>
  </div>

  <script rel="script" src="scripts/amministratore.js" ></script>  <%-- includo lo script da un file esterno per rendere il tutto più leggibile e ordinato--%>
</main>
<jsp:include page="footer.jsp"></jsp:include>
