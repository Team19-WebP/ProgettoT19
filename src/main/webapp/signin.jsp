<%--
  Created by IntelliJ IDEA.
  User: Enrico
  Date: 08/05/2023
  Time: 13:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<main>
  <body>
  <form>
    <label for="nome">Nome: </label>
    <input type="text" id="nome" name="nome" maxlength="50" size="50" required><br><br>
    <label for="cognome">Cognome: </label>
    <input type="text" id="cognome" name="cognome" maxlength="50" size="50" required><br><br>
    <label for="datadinascita">Cognome: </label>
    <input type="date" id="datadinascita" name="datadinascita" maxlength="50" size="50" required><br><br> <!-- TODO controllare che l'eta sia >= 18 anni-->
    <label for="email">Indirizzo email: </label>  <!-- TODO controllare che sia una mail (abbia @ ecc..)-->
    <input type="text" id="email" name="email" maxlength="50" size="50" required><br><br>
    <label for="telefono">numero di telefono: </label>  <!-- TODO permettere inserimento solo numeri e + all'inizio-->
    <input type="text" id="telefono" name="telefono" maxlength="15" size="15" required><br><br>
    <label for="comboBox"> Voglio iscrivermi come:</label>
    <%--<input type="radio" id="unirsi" name="altroRadio" value="Mi piacerebbe unirmi all'associazione Tum4world."
    required>
    <label for="unirsi">Mi piacerebbe unirmi all'associazione Tum4world.</label><br><br>
    <input type="radio" id="info" name="altroRadio" value="Vorrei saperne di più su quello che fate." required>
    <label for="info">Vorrei saperne di più su quello che fate.</label><br><br>
    <input type="radio" id="altro" name="altroRadio" value="Altro: " required>
    <label for="altroText">Altro: </label><br><br>
    <textarea id="altroText" name="altroText" maxlength="300" cols="100" rows="3"></textarea>
    <br><br>
    <script>
        let inputUnirsi = document.querySelector("#unirsi");
        let inputInfo = document.querySelector("#info");
        let inputAltro = document.querySelector("#altro");

        let textarea = document.querySelector("#altroText");

        textarea.disabled = true;

        inputUnirsi.addEventListener("click", stateHandleAltro);
        inputInfo.addEventListener("click", stateHandleAltro);
        inputAltro.addEventListener("click", stateHandleAltro);

        function stateHandleAltro() {
            if (inputAltro.checked == true) {
                textarea.disabled = false;
            } else {
                textarea.disabled = true;
            }
        }
    </script>--%>
    <select id="comboBox" name="comboBox"> <!-- non so se preferite radio button o combo box-->
      <option value="simpatizzante">simpatizzante</option>
      <option value="aderente">aderente</option>
    </select><br><br>
    <label for="username">Username: </label>
    <input type="text" id="username" username="nome" maxlength="50" size="50" required><br><br> <!-- TODO controllare che non ci sia un utente con questo username-->
    <label for="password">Password: </label>
    <input type="text" id="password" name="password" maxlength="50" size="50" required><br><br> <!-- TODO controllare che 8 caratteri le iniziali dei nostri nomi un numero una maiuscola e uno tra $  !  ?-->
    <label for="confpassword">Conferma Password: </label>
    <input type="text" id="confpassword" name="confpassword" maxlength="50" size="50" required><br><br> <!-- TODO controllare che sia uguale a quella sopra-->
    <input type="reset" value="Reset">
    <input type="submit" value="Invia">
  </form>
  </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
