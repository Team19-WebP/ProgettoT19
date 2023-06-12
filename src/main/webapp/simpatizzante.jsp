
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="counterSimpatizzante" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:useBean id="utenteLoggato" class="unitn.disi.web.progettoteam19.model.User" scope="session"/>

<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:setProperty name="counterSimpatizzante" property="hits" value="0"/>
<main>
  <jsp:include page="frasiIspiranti.jsp"></jsp:include>
  <div class="containerSimpatizzante">
  <div class="menu2">
    <nav>
      <button onclick="visualizzaDati();" class="selezionatoPaginaPers" id="buttonDati" ><b>dati personali</b></button>
      <button onclick="visualizzaAttivita();" id="buttonAttivita"><b>partecipa alle attività</b></button>
      <button onclick="visualizzaDanger();" id="buttonDanger"><b>cancella iscrizione</b></button>
    </nav>
  </div>

    <div id="dati">

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

    <div id="attivita" hidden="true">
      <br>
      <br>
      <form action= <%= response.encodeURL("ServletPartecipaAttivita")%> >
        <div class="simpatizzanteImmaginiAttivita">
          <div class="simpatizzanteImgCheckAtt">
            <div>
              <label for="attivita1">Aisha</label>
              <input id="attivita1" name="attivita1" type="checkbox" value="1" onclick="seleziona('attivita1', false)">
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita1', true)" id="imgattivita1">
                  <img src="immagini/galleria/img1.jpg" alt="Immagine prima attività">
                  <div class="textAttivita">Partecipa ad Aisha!</div>
                </a>
              </figure>
            </div>
          </div>
          <div class="simpatizzanteImgCheckAtt">
            <div>
              <label for="attivita2">Team4World</label>
              <input id="attivita2" name="attivita2" type="checkbox" value="2" onclick="seleziona('attivita2', false)">
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita2', true)" id="imgattivita2">
                  <img src="immagini/attivita/img2.jpg" alt="Immagine di Team4World">
                  <div class="textAttivita">Partecipa a Team4World!</div>
                </a>
              </figure>
            </div>
          </div>
          <div class="simpatizzanteImgCheckAtt">
            <div>
              <label for="attivita3">AbcFuture</label>
              <input id="attivita3" name="attivita3" type="checkbox" value="3" onclick="seleziona('attivita3', false)">
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita3', true)" id="imgattivita3">
                  <img src="immagini/galleria/img3.jpg" alt="Immagine di Abc4Future">
                  <div class="textAttivita">Partecipa a Abc4Future!</div>
                </a>
              </figure>
            </div>
          </div>
        </div>
        <br>
        <div>
          <input class="simpatizzante" type="submit" value="partecipa" style="width:90px; height:35px">
        </div>
      </form>
    </div>

    <div id="danger" hidden="true">
      <div>
        <b><h2> Attenzione: cancellare il profilo è irreversibile!!</h2></b>
      </div>
      <form id="cancellaIscrizioneform" action= '<%= response.encodeURL("ServletEliminaProfilo")%>' onsubmit="return confermaCancellaIscrizione()" method="get">
        <b><input id="cancellaIscrizione" type="submit" value="cancella iscrizione"></b>
      </form>
      <p id="popUp" style="color: red; alignment: center"></p>
    </div>

  </div>
  <script rel="script" src="scripts/aderenteSimpatizzante.js" ></script>  <%-- includo lo script da un file esterno per rendere il tutto più leggibile e modulare--%>
</main>
<jsp:include page="footer.jsp"></jsp:include>
