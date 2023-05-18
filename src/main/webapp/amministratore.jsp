<%--
  Created by IntelliJ IDEA.
  User: giuli
  Date: 17/05/2023
  Time: 13:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<link rel="stylesheet" href="css/amministratore.css">
<main>
  <div class="menu2">
    <nav>
      <button onclick="visualizzaUtenti();" id="buttonUtenti" style="background-color: #A6B1E1">elenco di tutti gli utenti</button>
      <button onclick="visualizzaSimpatizzanti();" id="buttonSimpatizzanti">elenco di tutti i simpatizzanti</button>
      <button onclick="visualizzaAderenti();" id="buttonAderenti">elenco di tutti gli aderenti</button>
      <button onclick="visualizzaVisite();" id="buttonVisite">statistiche visite al sito</button>
      <button onclick="visualizzaDonations();" id="buttonDonations">statistiche donazioni</button>  <%--TODO siamo sicuri che l'amministratore non debba poter fare anche lui le cose che fa un adrerente (disiscriversi o donare) --%>
    </nav>
  </div>
  <div class="containerInvioConfermato">

    <div id="utenti" hidden="false">
      <br>
      <br>
      <div onclick="showOrHide(this.id);" id="UtenteN">Mario Rossi</div> <%--TODO aggiungere la lista di utenti in una forma simile a questa dove cliccando il nome ti vengono fuori le altre info--%>
      <div id="infoUtenteN" hidden="true">
        <p> DATI E ALTRI DATI di Mario Rossi</p>
        <%--TODO dati inpaginati bene dell'utente (magari non troppi dati sensibili tipo password)--%>
      </div>
      <div onclick="showOrHide(this.id);" id="UtenteM">Marco D'Ambrosio</div>
      <div id="infoUtenteM" hidden="true">
        <p> DATI E ALTRI DATI di Marco D'Ambrosio</p>
        <%--TODO dati inpaginati bene dell'utente (magari non troppi dati sensibili tipo password)--%>
      </div>
    </div>

    <div id="simpatizzanti" hidden="true">
      <br>
      <br>
      <div onclick="showOrHide(this.id);" id="SimpatizzanteN">Gabriele Murru</div> <%--TODO aggiungere la lista di simpatizzanti in una forma simile a questa dove cliccando il nome ti vengono fuori le altre info--%>
      <div id="infoSimpatizzanteN" hidden="true">
        <p> DATI E ALTRI DATI di Gabriele Murru</p>
        <%--TODO dati inpaginati bene dell'simpatizzante (magari non troppi dati sensibili tipo password)--%>
      </div>
      <div onclick="showOrHide(this.id);" id="SimpatizzanteM">Kevin Goldoni</div>
      <div id="infoSimpatizzanteM" hidden="true">
        <p> DATI E ALTRI DATI di Kevin Goldoni</p>
        <%--TODO dati inpaginati bene dell'simpatizzante (magari non troppi dati sensibili tipo password)--%>
      </div>
    </div>

    <div id="aderenti" hidden="true">
      <br>
      <br>
      <div onclick="showOrHide(this.id);" id="AderenteN">Andrea Casulli</div> <%--TODO aggiungere la lista di aderenti in una forma simile a questa dove cliccando il nome ti vengono fuori le altre info--%>
      <div id="infoAderenteN" hidden="true">
        <p> DATI E ALTRI DATI di Andrea Casulli</p>
        <%--TODO dati inpaginati bene dell'aderente (magari non troppi dati sensibili tipo password)--%>
      </div>
      <div onclick="showOrHide(this.id);" id="AderenteM">Carmen Delugan</div>
      <div id="infoAderenteM" hidden="true">
        <p> DATI E ALTRI DATI di Carmen Delugan</p>
        <%--TODO dati inpaginati bene dell'aderente (magari non troppi dati sensibili tipo password)--%>
      </div>
    </div>

    <div id="visite" hidden="true">
      <br>
      <br>
      <div> il sito è stato visitato XXXX volte in totale.</div> <%--TODO prendere il numero di visite da un BEAN e aggiungerlo dinamicamente--%>
      <div id="grafico visite">
        <p> Grafico delle visite del sito</p>

        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/data.js"></script>
        <script src="https://code.highcharts.com/modules/series-label.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

        <figure class="highcharts-figure">
          <div id="GraficoVisite"></div>
          <p class="highcharts-description">    <%--TODO capire come si fanno i grafici [bene] con sta figata di lib--%>
            Grafico delle visite del sito.
          </p>
        </figure>

      </div>
    </div>

    <div id="donations" hidden="true">
      <br>
      <br>
      <div> sono stati donati 3244978€ a Tum4World </div> <%--TODO prendere il numero di soldi donati dal DB e aggiungerlo dinamicamente--%>
      <div id="grafico donazioni">
        <p> Grafico delle donazioni a Tum4World mese per mese</p> <%--TODO capire come si fanno i grafici con la lib della prof--%>
      </div>
    </div>

    <script rel="script" src="scripts/amministratore.js" ></script>  <%-- includo lo script da un file esterno per rendere il tutto più leggibile e ordinato--%>

  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
