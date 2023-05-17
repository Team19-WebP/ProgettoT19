<%--
  Created by IntelliJ IDEA.
  User: giuli
  Date: 14/05/2023
  Time: 09:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<link rel="stylesheet" href="css/simpatizzante.css">
<main>
  <div class="menu2">
    <nav>
      <button onclick="visualizzaDati();">dati personali</button>
      <button onclick="visualizzaAttivita();">partecipa alle attività</button>
      <button onclick="visualizzaDanger();">danger zone</button>
    </nav>
  </div>
  <div class="containerInvioConfermato">

    <div id="dati" hidden="false">
      <br>
      <br>
      <label for="nome">Nome:</label>
      <span id="nome"> Mario </span>
      <label for="cognome"> Cognome:</label>
      <span id="cognome"> Rossi </span> <br>
      <label for="ddn">Data Di nascita:</label>
      <span id="ddn"> 08/11/2002 </span> <br>
      <label for="email"> E-mail:</label>
      <span id="email"> mario.rossi@gmail.com </span> <br>
      <label for="tel"> Telefono:</label>
      <span id="tel"> +39 377 373 7733</span> <br>
      <label for="potere"> Tipo di iscrizione:</label>
      <span id="potere"> Simpatizzante</span> <br>
      <label for="username"> Username:</label>
      <span id="username"> _RMario_ </span> <br>  <%--TODO aggiungere i dati in maniera dinamica--%>
    </div>

    <div id="donation" hidden="true"> </div>


    <div id="attivita" hidden="true">
      <br>
      <br>
      <form action="serrvletUtile">                <%--TODO aggiungere immagini e rendere decente e capire se si fa da servlet o con una funz o entrambe--%>
        <label for="attivita1"> attività 1</label>
        <input id="attivita1" name="attivita1" type="checkbox" value="attività 1">
        <img src="immagini/attivita1.png" alt="immagine attività 1" onclick="clickImage(attivita1);" class="attivita">
        <label for="attivita2"> attività 2</label>
        <input id="attivita2" name="attivita2" type="checkbox" value="attività 2">
        <img src="immagini/attivita1.png" alt="immagine attività 2" onclick="clickImage(attivita2);" class="attivita">
        <label for="attivita3"> attività 3</label>
        <input id="attivita3" name="attivita3" type="checkbox" value="attività 3">
        <img src="immagini/attivita1.png" alt="immagine attività 3" onclick="clickImage(attivita3);" class="attivita">
        <input class="aderente" type="submit" value="conferma">
      </form>
    </div>

    <div id="danger" hidden="true">
      <div>
        <b><h6 style="color: red"> attenzione, tutte le azioni in questa pagina sono IRREVERSIBILI!!</h6></b>
      </div>
      <form action="Servlet??" onsubmit="return confermaCancellaIscrizione();">  <%--TODO servlet che elimina l'utente dal DB--%>
        <input class="cancellaIscrizione" type="submit" value="cancella iscrizione">
      </form>
    </div>

    <script rel="script" src="scripts/paginePrivate.js" ></script>  <%-- includo lo script da un file esterno per rendere il tutto più leggibile e modulare--%>

  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
