<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>

<jsp:useBean id="utenteLoggato" class="unitn.disi.web.progettoteam19.model.User" scope="session"/>

<jsp:useBean id="counterAderente" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterAderente" property="hits" value="0"/>
<main id="mainAderente">
  <jsp:include page="frasiIspiranti.jsp"></jsp:include>
  <div class="containerAderente">
  <div class="menu2">
    <nav>
      <button onclick="visualizzaDati();" id="buttonDati">dati personali</button>
      <button onclick="visualizzaDonation();" id="buttonDonation">dona alla associazione</button>
      <button onclick="visualizzaAttivita();" id="buttonAttivita">partecipa alle attività</button>
      <button onclick="visualizzaDanger();" id="buttonDanger">danger zone</button>
    </nav>
  </div>

    <div id="dati" hidden="true">
      <table>
        <tr>
          <th>
            <label for="nome">Nome:</label>
          </th>
          <th>
            <span id="nome"> <jsp:getProperty name="utenteLoggato" property="nome"/> </span>
          </th>
        </tr>

        <tr>
          <th>
            <label for="cognome"> Cognome:</label>
          </th>
          <th>
            <span id="cognome"> <jsp:getProperty name="utenteLoggato" property="cognome"/> </span>
          </th>
        </tr>

        <tr>
          <th>
            <label for="ddn">Data Di nascita:</label>
          </th>
          <th>
            <span id="ddn"> <jsp:getProperty name="utenteLoggato" property="dateFormatITA"/> </span>
          </th>
        </tr>

        <tr>
          <th>
            <label for="email"> E-mail:</label>
          </th>
          <th>
            <span id="email"> <jsp:getProperty name="utenteLoggato" property="email"/> </span> <br>
          </th>
        </tr>

        <tr>
          <th>
            <label for="tel"> Telefono:</label>
          </th>
          <th>
            <span id="tel"> <jsp:getProperty name="utenteLoggato" property="cellulare"/> </span>
          </th>
        </tr>

        <tr>
          <th>
            <label for="potere"> Tipo di iscrizione:</label>
          </th>
          <th>
            <span id="potere"> <jsp:getProperty name="utenteLoggato" property="tipologia"/> </span>
          </th>
        </tr>

        <tr>
          <th>
            <label for="username"> Username:</label>
          </th>
          <th>
            <span id="username">  </span><jsp:getProperty name="utenteLoggato" property="username"/>
          </th>
        </tr>

      </table>
    </div>

    <div id="attivitaAderente" hidden="true">
      <br>
      <br>
      <form action="ServletPartecipaAttivita">
        <div class="aderenteImmaginiAttivita">
          <div class="aderenteImgCheckAtt">
            <div>
              <label for="attivita1">Aisha</label>
              <input id="attivita1" name="attivita1" type="checkbox" value="1">
              <%--          <img src="immagini/attivita/img1.jpg" alt="immagine attività 1" onclick="clickImage(attivita1);" class="immagineAttAderente">--%>
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita1')" id="imgattivita1">
                  <img src="immagini/galleria/img1.jpg" alt="Immagine prima attività">
                  <div class="textAttivita">Partecipa ad Aisha!</div>
                </a>
                <%--<br><figcaption><b><i>Attività 1</i></b></figcaption>--%>
              </figure>
            </div>
          </div>
          <div class="aderenteImgCheckAtt">
            <div>
              <label for="attivita2">Team4World</label>
              <input id="attivita2" name="attivita2" type="checkbox" value="2">
              <%--          <img src="immagini/attivita/img2.jpg" alt="immagine attività 2" onclick="clickImage(attivita2);" class="immagineAttAderente">--%>
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita2')" id="imgattivita2">
                  <img src="immagini/attivita/img2.jpg" alt="Immagine di Team4World">
                  <div class="textAttivita">Partecipa a Team4World!</div>
                </a>
                <%--<br><figcaption> <b><i>Team4World</i></b> </figcaption>--%>
              </figure>
            </div>
          </div>
          <div class="aderenteImgCheckAtt">
            <div>
              <label for="attivita3">AbcFuture</label>
              <input id="attivita3" name="attivita3" type="checkbox" value="3">
              <%--          <img src="immagini/attivita/img3.jpg" alt="immagine attività 3" onclick="clickImage(attivita3);" class="immagineAttAderente">--%>
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita3')" id="imgattivita3">
                  <img src="immagini/galleria/img3.jpg" alt="Immagine di Abc4Future">
                  <div class="textAttivita">Partecipa a Abc4Future!</div>
                </a>
                <%--<br><figcaption> <b><i>Abc4Future</i></b> </figcaption>--%>
              </figure>
            </div>
          </div>
        </div>
        <br>
        <div>
          <input class="aderente" type="submit" value="partecipa" style="width:90px; height:35px">  <%--TODO non so se va bene lasciare uno style qui--%>
        </div>
      </form>
    </div>

    <div id="donation" hidden="true">
      <br>
      <br>
      <!-- todo implementare meglio validadonazione--->
      <!-- todo implementare conferma donazione (con ajax) -->

      <form action="ServletDonazione" onsubmit="return validaDonazione();">
        <label for="donazione">Importo (in €): </label>
        <input type="number" step=".01" min="0" placeholder="Inserisci importo..."  id="donazione" name="donazione" required> <br> <!-- todo togliere required [anche da simpatizzante e amministratore] -->
        <br><br>
        <input class="aderente" type="submit" value="dona">
      </form>
    </div>

    <div id="danger" hidden="true">
      <div>
        <b><h6 style="color: red"> attenzione, tutte le azioni in questa pagina sono IRREVERSIBILI!!</h6></b>
      </div>
      <form action="ServletEliminaProfilo" onsubmit="return confermaCancellaIscrizione()" method="get">
        <input id="cancellaIscrizione" type="submit" value="cancella iscrizione">
      </form>
      <p id="popUp" style="color: red; alignment: center"></p>
    </div>

    <div id="default">
      <p>Benvenuto nella tua pagina privata!</p>
    </div>

  </div>
  <script rel="script" src="scripts/aderente.js" ></script>  <%-- includo lo script da un file esterno per rendere il tutto più leggibile e ordinato--%>
</main>
<jsp:include page="footer.jsp"></jsp:include>