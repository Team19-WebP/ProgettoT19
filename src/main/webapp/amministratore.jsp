<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>

<jsp:useBean id="counterGenerale" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterHome" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterAmministratore" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterAttivita" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterAttivita1" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterAttivita2" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterAttivita3" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterConfermasignin" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterContatti" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterInvioConfermato" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterLogin" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterChisiamo" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterLogout" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterSignin" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterAderente" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="counterSimpatizzante" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>

<jsp:setProperty name="counterAmministratore" property="hits" value="0"/>

<main>
  <jsp:include page="frasiIspiranti.jsp"></jsp:include>
  <div class="containerAmministratore">
  <div class="menu2">
    <nav>
      <button onclick="visualizzaUtenti();" id="buttonUtenti">elenco di tutti gli utenti</button>
      <button onclick="visualizzaSimpatizzanti();" id="buttonSimpatizzanti">elenco di tutti i simpatizzanti</button>
      <button onclick="visualizzaAderenti();" id="buttonAderenti">elenco di tutti gli aderenti</button>
      <button onclick="visualizzaVisite();" id="buttonVisite" class="selezionatoPaginePers">statistiche visite al sito</button>
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

    <div>
      <p id="hitsHome" hidden="true"><jsp:getProperty name="counterHome" property="hits"/></p>                          <%----%>
      <p id="hitsAttivita" hidden="true"><jsp:getProperty name="counterAttivita" property="hits"/></p>                  <%----%>
      <p id="hitsAttivita1" hidden="true"><jsp:getProperty name="counterAttivita1" property="hits"/></p>                <%----%>
      <p id="hitsAttivita2" hidden="true"><jsp:getProperty name="counterAttivita2" property="hits"/></p>                <%----%>
      <p id="hitsAttivita3" hidden="true"><jsp:getProperty name="counterAttivita3" property="hits"/></p>                <%----%>
      <p id="hitsSignIn" hidden="true"><jsp:getProperty name="counterSignin" property="hits"/></p>                      <%----%>
      <p id="hitsConfermaSignIn" hidden="true"><jsp:getProperty name="counterConfermasignin" property="hits"/></p>      <%--includo i BEAN che contengoono i dati per il grafico delle visite--%>
      <p id="hitsAderente" hidden="true"><jsp:getProperty name="counterAderente" property="hits"/></p>                  <%--e setto tutti gli hidden a true perche non voglio visualizzarli--%>
      <p id="hitsSimpatizzante" hidden="true"><jsp:getProperty name="counterSimpatizzante" property="hits"/></p>        <%--ma solo poterli includere nel file js--%>
      <p id="hitsAmministratore" hidden="true"><jsp:getProperty name="counterAmministratore" property="hits"/></p>      <%----%>
      <p id="hitsContatti" hidden="true"><jsp:getProperty name="counterContatti" property="hits"/></p>                  <%----%>
      <p id="hitsConfermaContatti" hidden="true"><jsp:getProperty name="counterInvioConfermato" property="hits"/></p>   <%----%>
      <p id="hitsLogin" hidden="true"><jsp:getProperty name="counterLogin" property="hits"/></p>                        <%----%>
      <p id="hitsLogout" hidden="true"><jsp:getProperty name="counterLogout" property="hits"/></p>                      <%----%>
      <p id="hitsChiSiamo" hidden="true"><jsp:getProperty name="counterChisiamo" property="hits"/></p>                  <%----%>
    </div>

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>      <%--vari script delle librerie necessari per la visualizzazione dei grafici--%>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script> <%--questo nello specifico è essenziale--%>

    <div id="contatoreVisite"> Visite sito: <b><jsp:getProperty name="counterGenerale" property="hits"/></b> </div>
    <div id="visite">
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
