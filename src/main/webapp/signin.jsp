<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<main>
  <body>
  <form action="ServletSignin" method="post" onsubmit="return validaEmail(datadinascita.value, email.value, username.value, passwordVal.value, confpassword.value )">
    <label for="nome">Nome: </label>
    <input type="text" id="nome" name="nome" maxlength="50" size="50" placeholder="Mario" required><br><br>

    <label for="cognome">Cognome: </label>
    <input type="text" id="cognome" name="cognome" maxlength="50" size="50" placeholder="Rossi" required><br><br>

    <label for="datadinascita">Data di nascita: </label>
    <input type="date" id="datadinascita" name="datadinascita" maxlength="50" size="50" required>
    <span id="ageAlert" class="requirements">(* per registrarisi è necessario essere maggiorenni)</span><br><br> <!-- TODO controllare che l'eta sia >= 18 anni-->

    <label for="email">Indirizzo email: </label><!-- TODO controllare che sia una mail (abbia @ ecc..)-->
    <input type="text" id="email" name="email" maxlength="50" size="50" placeholder="mario.rossi@gmail.com" required>
    <span id="emailAlert" class="alert" hidden="true" color="#FF0000">(* mail non valida)</span><br><br>

    <label for="telefono">numero di telefono: </label>  <!-- TODO permettere inserimento solo numeri e + all'inizio-->
    <input type="text" id="telefono" name="telefono" maxlength="15" size="15" placeholder="345 1234567" required><br><br>

    <label for="comboBox"> Voglio iscrivermi come:</label>
    <select id="comboBox" name="comboBox">
      <option value="simpatizzante">simpatizzante</option>
      <option value="aderente">aderente</option>
    </select><br><br>

    <label for="username">Username: </label>
    <input type="text" id="username" name="username" maxlength="50" size="50" placeholder="_RMario_" required> <!-- TODO controllare che non ci sia un utente con questo username-->
    <span class="alert" id="userAlert" hidden="true" color="#FF0000">(* username gia preso) </span><br><br>

    <label for="passwordVal">Password: </label>
    <input type="password" id="passwordVal" name="passwordVal" maxlength="50" size="50" required> <!-- TODO controllare che 8 caratteri le iniziali dei nostri nomi un numero una maiuscola e uno tra $  !  ?-->
    <span class="requirements" id="passAlert">(* la password deve contenere almeno 8 caratteri di cui anmeno uno maiuscolo, un numero, le lettere [E,F,G] e uno tra[$,!,?])</span><br><br>

    <label for="confpassword">Conferma Password: </label>
    <input type="password" id="confpassword" name="confpassword" maxlength="50" size="50" required> <!-- TODO controllare che sia uguale a quella sopra-->
    <span class="alert" id="confPassAlert" hidden="true" color="#FF0000">(* le password non coincidono)</span><br><br>

    <input type="reset" value="Reset">
    <input type="submit" value="Invia">

    <script>
      function validaForm(datadinascita, email, username, passwordVal, confpassword) {
        let ageAlert = document.querySelector("#ageAlert");
        let emailAlert = document.querySelector("#emailAlert");
        let passAlert = document.querySelector("#passAlert");
        let confPassAlert = document.querySelector("#confPassAlert");


        ageAlert.color = "#000000";
        emailAlert.hidden = true;
        passAlert.color = "#000000";
        confPassAlert.hidden = false;
        const regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        const regexPass = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/; //TODO regula exp da cambiare con quella giusta

        if (false){
          //TODO controllare maggiorenne
          ageAlert.color = "#FF0000";
          datadinascita.focus();
          return false;
        }else if(!regexEmail.test(email)){
          emailAlert.hidden = false;
          email.focus();
          return false;
        }else if(!regexPass.test(passwordVal)){
          passAlert.color = "#FF0000";
          passwordVal.focus();
          return false;
        }else if(passwordVal!==confpassword){
          confPassAlert.hidden = false;
          passwordVal.focus();
          return false;
        }else return true;
      }
    </script>

  </form>
  </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
