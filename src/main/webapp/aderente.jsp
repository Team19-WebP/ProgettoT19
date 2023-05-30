<%--
  Created by IntelliJ IDEA.
  User: giuli
  Date: 12/05/2023
  Time: 12:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<link rel="stylesheet" href="css/aderente.css">
<jsp:useBean id="counterAderente" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterAderente" property="hits" value="0"/>
<main id="mainAderente">
  <div class="containerAderente">
  <div class="menu2">
    <nav>
      <button onclick="visualizzaDati();" id="buttonDati">dati personali</button>
      <button onclick="visualizzaDonation();" id="buttonDonation">dona alla associazione</button>
      <button onclick="visualizzaAttivita();" id="buttonAttivita">partecipa alle attività</button>
      <button onclick="visualizzaDanger();" id="buttonDanger">danger zone</button>
      <form action="ServletGetData">
        <input type="submit" value="PRESS ME">
      </form>
    </nav>
  </div>

    <div id="dati" hidden="true">
      <table>

        <tr>
          <th>
            <label for="nome">Nome:</label>
          </th>
          <th>
            <span id="nome"> Mario </span>
          </th>
        </tr>

        <tr>
          <th>
            <label for="cognome"> Cognome:</label>
          </th>
          <th>
            <span id="cognome"> Rossi </span>
          </th>
        </tr>

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
    </div>

    <div id="attivitaAderente" hidden="true">
      <br>
      <br>
      <form action="ServletPartecipaAttivita">                <%--TODO aggiungere immagini e rendere decente e capire se si fa da servlet o con una funz o entrambe--%>
        <div class="aderenteImmaginiAttivita">
          <div class="aderenteImgCheckAtt">
            <div>
              <label for="attivita1">Aisha</label>
              <input id="attivita1" name="attivita1" type="checkbox" value="attività 1">
              <%--          <img src="immagini/attivita/img1.jpg" alt="immagine attività 1" onclick="clickImage(attivita1);" class="immagineAttAderente">--%>
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita1')" id="imgattivita1">
                  <img src="immagini/galleria/img1.jpg" alt="Immagine prima attività">
                  <div class="text">Partecipa ad Aisha!</div>
                </a>
                <%--<br><figcaption><b><i>Attività 1</i></b></figcaption>--%>
              </figure>
            </div>
          </div>
          <div class="aderenteImgCheckAtt">
            <div>
              <label for="attivita2">Team4World</label>
              <input id="attivita2" name="attivita2" type="checkbox" value="attività 2">
              <%--          <img src="immagini/attivita/img2.jpg" alt="immagine attività 2" onclick="clickImage(attivita2);" class="immagineAttAderente">--%>
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita2')" id="imgattivita2">
                  <img src="immagini/attivita/img2.jpg" alt="Immagine di Team4World">
                  <div class="text">Partecipa a Team4World!</div>
                </a>
                <%--<br><figcaption> <b><i>Team4World</i></b> </figcaption>--%>
              </figure>
            </div>
          </div>
          <div class="aderenteImgCheckAtt">
            <div>
              <label for="attivita3">AbcFuture</label>
              <input id="attivita3" name="attivita3" type="checkbox" value="attività 3">
              <%--          <img src="immagini/attivita/img3.jpg" alt="immagine attività 3" onclick="clickImage(attivita3);" class="immagineAttAderente">--%>
            </div>
            <div class="im1">
              <figure style="margin: 0px">
                <a class="linkImg" onclick="seleziona('attivita3')" id="imgattivita3">
                  <img src="immagini/attivita/img3.jpg" alt="Immagine di Abc4Future">
                  <div class="text">Partecipa a Abc4Future!</div>
                </a>
                <%--<br><figcaption> <b><i>Abc4Future</i></b> </figcaption>--%>
              </figure>
            </div>
          </div>
        </div>
        <br>
        <div>
          <input class="aderente" type="submit" value="partecipa" style="width:90px; height:35px">
        </div>
      </form>
    </div>

    <div id="donation" hidden="true">
      <br>
      <br>
      <form action="ServletDonazione">
        <label for="donazione">Importo: </label>
        <input type="text" placeholder="420.69"  id="donazione" name="donazione" required> <br> <%-- TODO pattern="/^[0-9]+(.[0-9])/"  regex per mettere solo soldi(numeri con la virgola)--%>
        <br><br>
        <input class="aderente" type="button" value="donazione anonima">
        <br><br>
        <input class="aderente" type="submit" value="dona">
      </form>
    </div>

    <div id="danger" hidden="true">
      <div>
        <b><h6 style="color: red"> attenzione, tutte le azioni in questa pagina sono IRREVERSIBILI!!</h6></b>
      </div>
      <form action="ServletEliminaProfilo" onsubmit="return confermaCancellaIscrizione()" method="get">
        <input class="cancellaIscrizione" type="submit" value="cancella iscrizione">
      </form>
      <p id="popUp" style="color: red; alignment: center"></p>
    </div>

    <div id="default">
      <p> Pagina privata! </p>
    </div>

  </div>
  <script rel="script" src="scripts/aderente.js" ></script>  <%-- includo lo script da un file esterno per rendere il tutto più leggibile e ordinato--%>
</main>
<jsp:include page="footer.jsp"></jsp:include>