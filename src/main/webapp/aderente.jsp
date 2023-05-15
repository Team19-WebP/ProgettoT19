<%--
  Created by IntelliJ IDEA.
  User: giuli
  Date: 12/05/2023
  Time: 12:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<main>
  <body>
  <div class="containerInvioConfermato">

    <table>
      <tr>
        <td>
          <form action="visualizzaDati()">
            <input type="submit" value="visualizza dati personali">
          </form>
        </td>
      </tr>
      <tr>
        <td>
          <div id="dati" hidden="true">
            <h1>dati dati dati dati e altri dati </h1>  <%--TODO aggiungere i dati --%>
          </div>
        </td>
      </tr>
      <tr>
        <td>
            <form action="ServletDonazione">
              <label for="donazione">Importo:</label>
              <input type="number" id="donazione" name="donazione">
              <input type="submit" value="dona">
            </form>
        </td>
      </tr>
      <tr>
        <td>
          <div id="attivita">
            <form>                <%--TODO aggiungere immagini e rendere decente--%>
              <label for="attivita1"> attività 1</label>
              <input id="attivita1" name="attivita1" type="checkbox" value="attività 1">
              <img src="attivita1.jpg" alt="immagine attività 1">
              <label for="attivita2"> attività 2</label>
              <input id="attivita2" name="attivita2" type="checkbox" value="attività 2">
              <img src="attivita2.jpg" alt="immagine attività 2">
              <label for="attivita3"> attività 3</label>
              <input id="attivita3" name="attivita3" type="checkbox" value="attività 3" >
              <img src="attivita3.jpg" alt="immagine attività 3" onclick="attivita1();">
              <input class="aderente" type="submit" value="conferma">
            </form>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <form action="Servlet??" onsubmit="return confermaCancellaIscrizione();">  <%--TODO servlet che elimina l'utente dal DB--%>
            <input class="cancellaIscrizione" type="submit" value="cancella iscrizione">
          </form>
        </td>
      </tr>

    </table>



    <script>

      function attivita1(){
        <%--TODO capire coṁe checkare la checkbox--%>
      }

      function confermaCancellaIscrizione(){
        <%--TODO qualcosa tipo pop up che chieda la conferma e se dici si return true altrimenti false--%>
      }

      function visualizzaDati(){
        let dati = document.querySelector("#dati");
        dati.hidden = !dati.hidden;
      }

      function dona(){
        let donazione = document.querySelector("#donazione"); // forse è inutile, ma forse no
        donazione.value
      }

    </script>

  </div>
  </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
