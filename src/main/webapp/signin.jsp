<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<main>
  <body>
  <form>
    <label for="nome">Nome: </label>
    <input type="text" id="nome" name="nome" maxlength="50" size="50" required><br><br>
    <label for="cognome">Cognome: </label>
    <input type="text" id="cognome" name="cognome" maxlength="50" size="50" required><br><br>
    <label for="datadinascita">Data di nascita: </label>
    <input type="date" id="datadinascita" name="datadinascita" maxlength="50" size="50" required>
    <span class="requirements">(* per registrarisi è necessario essere maggiorenni)</span><br><br> <!-- TODO controllare che l'eta sia >= 18 anni-->
    <label for="email">Indirizzo email: </label><!-- TODO controllare che sia una mail (abbia @ ecc..)-->
    <input type="text" id="email" name="email" maxlength="50" size="50" required>
    <!--  span class="alert">(* mail non valida) TODO questa cosa deve apparire solo se è vera</span>-->
    <br><br>
    <label for="telefono">numero di telefono: </label>  <!-- TODO permettere inserimento solo numeri e + all'inizio-->
    <input type="text" id="telefono" name="telefono" maxlength="15" size="15" required><br><br>
    <label for="comboBox"> Voglio iscrivermi come:</label>
    <select id="comboBox" name="comboBox">
      <option value="simpatizzante">simpatizzante</option>
      <option value="aderente">aderente</option>
    </select><br><br>
    <label for="username">Username: </label>
    <input type="text" id="username" name="username" maxlength="50" size="50" required> <!-- TODO controllare che non ci sia un utente con questo username-->
    <!--  span class="alert">(* username gia preso) TODO questa cosa deve apparire solo se è vera</span>--><br><br>
    <label for="password">Password: </label>
    <input type="password" id="password" name="password" maxlength="50" size="50" required> <!-- TODO controllare che 8 caratteri le iniziali dei nostri nomi un numero una maiuscola e uno tra $  !  ?-->
    <span class="requirements">(* la password deve contenere almeno 8 caratteri di cui anmeno uno maiuscolo, un numero, le lettere [E,F,G] e uno tra[$,!,?])</span><br><br>
    <label for="confpassword">Conferma Password: </label>
    <input type="password" id="confpassword" name="confpassword" maxlength="50" size="50" required> <!-- TODO controllare che sia uguale a quella sopra-->
    <!--  span class="alert">(* le password non coincidono) TODO questa cosa deve apparire solo se è vera</span>--><br><br>
    <input type="reset" value="Reset">
    <input type="submit" value="Invia">
  </form>
  </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
