<%--
  Created by IntelliJ IDEA.
  User: giuli
  Date: 14/05/2023
  Time: 09:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<main>
  <body>
  <div class="containerInvioConfermato">

    <button onclick="visualizzaDati();">visualizza dati personali</button>
    <div id="dati" hidden="true">
      <h1>dati dati dati dati e altri dati </h1>  <%--TODO aggiungere i dati --%>
    </div><br>

    <form>
      <label for="attivita1"> attività 1</label>
      <input id="attivita1" name="attivita1" type="checkbox" value="attività 1">
      <label for="attivita2"> attività 2</label>
      <input id="attivita2" name="attivita2" type="checkbox" value="attività 2">
      <label for="attivita3"> attività 3</label>
      <input id="attivita3" name="attivita3" type="checkbox" value="attività 3">
      <input type="submit" value="conferma">
    </form>

    <button onclick="Servlet??;">cancella iscrizione</button><br> <%--TODO servlet che elimina l'utente dal DB--%>

    <script>

      function visualizzaDati(){
        let dati = document.querySelector("#dati");
        dati.hidden = !dati.hidden;
      }
    </script>

  </div>

  </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
