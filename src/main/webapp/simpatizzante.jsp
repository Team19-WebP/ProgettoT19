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
      <button onclick="visualizzaDati();" id="buttonDati" style="background-color: #A6B1E1">dati personali</button>
      <button onclick="visualizzaAttivita();" id="buttonAttivita">partecipa alle attività</button>
      <button onclick="visualizzaDanger();" id="buttonDanger">danger zone</button>
    </nav>
  </div>
  <div class="containerInvioConfermato">

    <div id="dati">

      <style>
        table{
          border: #424874 solid 2px;
          margin: 15%;
          width: max-content;
          border-collapse: collapse;
        }
        tr{
          border: #424874 solid 2px;
          border-collapse: collapse;   <%-- TODO @FEDERICO lascio fare a te questi stili e metterli nel css perche non so cosa sto facendo--%>
          margin: 15%;
          padding: 15%;
        }
        th{
          border: #424874 solid 2px;
          border-collapse: collapse;
          padding: 5%;
          margin: 10%;
        }
      </style>

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

    <div id="default" hidden="true">
      <p> Pagina privata! </p>
    </div>

    <script rel="script" src="scripts/simpatizzante.js" ></script>  <%-- includo lo script da un file esterno per rendere il tutto più leggibile e modulare--%>

  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
