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
  <jsp:include page="frasiIspiranti.jsp"></jsp:include>  <div class="menu2">
    <nav>
      <button onclick="visualizzaUtenti();" id="buttonUtenti">elenco di tutti gli utenti</button>
      <button onclick="visualizzaSimpatizzanti();" id="buttonSimpatizzanti">elenco di tutti i simpatizzanti</button>
      <button onclick="visualizzaAderenti();" id="buttonAderenti">elenco di tutti gli aderenti</button>
      <button onclick="visualizzaVisite();" id="buttonVisite">statistiche visite al sito</button>
      <button onclick="visualizzaDonations();" id="buttonDonations">statistiche donazioni</button>  <%--TODO siamo sicuri che l'amministratore non debba poter fare anche lui le cose che fa un adrerente (disiscriversi o donare) --%>
    </nav>
  </div>
  <div class="containerInvioConfermato">

    <div id="utenti" hidden="true">
      <br>
      <br>
      <hr>
      <div onclick="showOrHide(this.id);" id="UtenteN">Mario Rossi</div> <%--TODO aggiungere la lista di utenti in una forma simile a questa dove cliccando il nome ti vengono fuori le altre info--%>
      <hr>
      <div id="infoUtenteN" hidden="true">
        <style>
          table{
            border-collapse: collapse;
            border: black solid 1px;
          }
        </style>
        <table>
          <tr>
            <th>
              <label for="ddn">Data Di nascita:</label>
            </th>
            <th>
              <span id="ddn"> 08/11/2002 </span>
            </th>
          </tr>

          <tr>
            <th>
              <label for="email"> E-mail:</label>
            </th>
            <th>
              <span id="email"> mario.rossi@gmail.com </span> <br>
            </th>
          </tr>

          <tr>
            <th>
              <label for="tel"> Telefono:</label>
            </th>
            <th>
              <span id="tel"> +39 377 373 7733</span>
            </th>
          </tr>

          <tr>
            <th>
              <label for="potere"> Tipo di iscrizione:</label>
            </th>
            <th>
              <span id="potere"> Simpatizzante</span>
            </th>
          </tr>
          <%--TODO aggiungere i dati in maniera dinamica ( già mezzo fatto nel js)--%>
          <tr>
            <th>
              <label for="username"> Username:</label>
            </th>
            <th>
              <span id="username"> _RMario_ </span>
            </th>
          </tr>

        </table>
        <hr>
        <%--TODO dati inpaginati bene dell'utente (magari non troppi dati sensibili tipo password) [bisogna fare una funz js che li carica dinamici obv]--%>
      </div>
      <div onclick="showOrHide(this.id);" id="UtenteM">Marco D'Ambrosio</div>
      <hr>
      <div id="infoUtenteM" hidden="true">
        <style>
          table{
            border-collapse: collapse;
            border: black solid 1px;
          }
        </style>
        <table>
          <tr>
            <th>
              <label for="ddnUtenteM">Data Di nascita:</label>
            </th>
            <th>
              <span id="ddnUtenteM"> 08/11/2002 </span>
            </th>
          </tr>

          <tr>
            <th>
              <label for="emailUtenteM"> E-mail:</label>
            </th>
            <th>
              <span id="emailUtenteM"> mario.rossi@gmail.com </span> <br>
            </th>
          </tr>

          <tr>
            <th>
              <label for="telUtenteM"> Telefono:</label>
            </th>
            <th>
              <span id="telUtenteM"> +39 377 373 7733</span>
            </th>
          </tr>

          <tr>
            <th>
              <label for="potereUtenteM"> Tipo di iscrizione:</label>
            </th>
            <th>
              <span id="potereUtenteM"> Simpatizzante</span>
            </th>
          </tr>
          <%--TODO aggiungere i dati in maniera dinamica ( già mezzo fatto nel js)--%>
          <tr>
            <th>
              <label for="usernameUtenteM"> Username:</label>
            </th>
            <th>
              <span id="usernameUtenteM"> _RMario_ </span>
            </th>
          </tr>

        </table>
        <hr>
      </div>
    </div>

    <div id="simpatizzanti" hidden="true">
      <br>
      <br>
      <div onclick="showOrHide(this.id);" id="SimpatizzanteN">Gabriele Murru</div> <%--TODO aggiungere la lista di simpatizzanti in una forma simile a questa dove cliccando il nome ti vengono fuori le altre info--%>
      <div id="infoSimpatizzanteN" hidden="true">
        <p> DATI E ALTRI DATI di Gabriele Murru</p>
        <%--TODO dati inpaginati bene dell'simpatizzante (magari non troppi dati sensibili tipo password) [bisogna fare una funz js che li carica dinamici obv]--%>
      </div>
      <div onclick="showOrHide(this.id);" id="SimpatizzanteM">Kevin Goldoni</div>
      <div id="infoSimpatizzanteM" hidden="true">
        <p> DATI E ALTRI DATI di Kevin Goldoni</p>
      </div>
    </div>

    <div id="aderenti" hidden="true">
      <br>
      <br>
      <div onclick="showOrHide(this.id);" id="AderenteN">Andrea Casulli</div> <%--TODO aggiungere la lista di aderenti in una forma simile a questa dove cliccando il nome ti vengono fuori le altre info--%>
      <div id="infoAderenteN" hidden="true">
        <p> DATI E ALTRI DATI di Andrea Casulli</p>
        <%--TODO dati inpaginati bene dell'aderente (magari non troppi dati sensibili tipo password) [bisogna fare una funz js che li carica dinamici obv]--%>
      </div>
      <div onclick="showOrHide(this.id);" id="AderenteM">Carmen Delugan</div>
      <div id="infoAderenteM" hidden="true">
        <p> DATI E ALTRI DATI di Carmen Delugan</p>
      </div>
    </div>

    <div>
      <p id="hitsHome" hidden="true"><jsp:getProperty name="counterHome" property="hits"/></p>
      <p id="hitsAttivita" hidden="true"><jsp:getProperty name="counterAttivita" property="hits"/></p>
      <p id="hitsAttivita1" hidden="true"><jsp:getProperty name="counterAttivita1" property="hits"/></p>
      <p id="hitsAttivita2" hidden="true"><jsp:getProperty name="counterAttivita2" property="hits"/></p>
      <p id="hitsAttivita3" hidden="true"><jsp:getProperty name="counterAttivita3" property="hits"/></p>
      <p id="hitsSignIn" hidden="true"><jsp:getProperty name="counterSignin" property="hits"/></p>
      <p id="hitsConfermaSignIn" hidden="true"><jsp:getProperty name="counterConfermasignin" property="hits"/></p>
      <p id="hitsAderente" hidden="true"><jsp:getProperty name="counterAderente" property="hits"/></p>
      <p id="hitsSimpatizzante" hidden="true"><jsp:getProperty name="counterSimpatizzante" property="hits"/></p>
      <p id="hitsAmministratore" hidden="true"><jsp:getProperty name="counterAmministratore" property="hits"/></p>
      <p id="hitsContatti" hidden="true"><jsp:getProperty name="counterContatti" property="hits"/></p>
      <p id="hitsConfermaContatti" hidden="true"><jsp:getProperty name="counterInvioConfermato" property="hits"/></p>
      <p id="hitsLogin" hidden="true"><jsp:getProperty name="counterLogin" property="hits"/></p>
      <p id="hitsLogout" hidden="true"><jsp:getProperty name="counterLogout" property="hits"/></p>
      <p id="hitsChiSiamo" hidden="true"><jsp:getProperty name="counterChisiamo" property="hits"/></p>
      <%--TODO siamo sicuri che l'amministratore non debba poter fare anche lui le cose che fa un adrerente (disiscriversi o donare) --%>
    </div>

    <div id="default" hidden="false">
      <p>Benvenuto nella tua pagina privata!</p>
    </div>

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>      <%--vari script delle librerie necessari per la visualizzazione dei grafici--%>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script> <%--questo nello specifico è essenziale--%>

    <div id="visite" hidden="true">
      <br>
      <form action="ServletReset" method="get">
        <input type="submit" value="RESET">
      </form>
      <br>
      <div> il sito è stato visitato <b><jsp:getProperty name="counterGenerale" property="hits"/></b> volte in totale.</div>
      <div id="grafico visite">

        <figure class="highcharts-figure">
          <div id="GraficoVisite"></div>  <%--div che viene utilizzato dalle librerie per riempirlo con il grafico interattivo--%>
        </figure>
      </div>
    </div>

    <div id="donations" hidden="true">

      <div> il sito ha ricevuto XXXX€ in totale.</div> <%--TODO prendere il numero di visite da un BEAN e aggiungerlo dinamicamente--%>

      <figure class="highcharts-figure">
        <div id="GraficoDonazioni"></div>  <%--div che viene utilizzato dalle librerie per riempirlo con il grafico interattivo--%>
        <p class="highcharts-description">    <%--TODO capire come si fanno i grafici [bene] con sta figata di lib--%>
          Grafico delle donazioni al sito.
        </p>
      </figure>

    </div>
  </div>
  <script rel="script" src="scripts/amministratore.js" ></script>  <%-- includo lo script da un file esterno per rendere il tutto più leggibile e ordinato--%>
</main>
<jsp:include page="footer.jsp"></jsp:include>
