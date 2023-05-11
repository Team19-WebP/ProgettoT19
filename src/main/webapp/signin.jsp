<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<main>
  <body>
  <form action="ServletSignin" method="post" onsubmit="return validaForm(datadinascita, email, username, passwordVal, confpassword )">

    <label for="nome">Nome: </label>
    <input  type="text" id="nome" name="nome" maxlength="50" size="50" placeholder="Mario" required><br><br> <!-- TODO style="margin-left: 4ch"-->

    <label for="cognome">Cognome: </label>
    <input type="text" id="cognome" name="cognome" maxlength="50" size="50" placeholder="Rossi" required><br><br>

    <label for="datadinascita">Data di nascita: </label>
    <input type="date" id="datadinascita" name="datadinascita" maxlength="50" size="50" required><br>
    <span id="ageAlert" class="requirements">(* per registrarisi è necessario essere maggiorenni)</span><br><br> <!-- TODO controllare che l'eta sia >= 18 anni-->

    <label for="email">Indirizzo email: </label><!-- TODO controllare che sia una mail (abbia @ ecc..)-->
    <input type="text" id="email" name="email" maxlength="50" size="50" placeholder="mario.rossi@gmail.com" required> <br>
    <span id="emailAlert" class="alert" hidden="true">(* mail non valida)</span><br>

    <label for="telefono">numero di telefono: </label>  <!-- TODO permettere inserimento solo numeri e + all'inizio-->
    <input type="tel" id="telefono" name="telefono" maxlength="15" size="15" placeholder="345 1234567" pattern="[0-9]{10}" required><br><br>

    <label for="comboBox"> Voglio iscrivermi come:</label>
    <select id="comboBox" name="comboBox">
      <option value="simpatizzante">simpatizzante</option>
      <option value="aderente">aderente</option>
    </select><br><br>

    <label for="username">Username: </label>
    <input type="text" id="username" name="username" maxlength="50" size="50" placeholder="_RMario_" required> <br> <!-- TODO controllare che non ci sia un utente con questo username-->
    <span class="alert" id="userAlert" hidden="true">(* username gia preso) </span><br>

    <label for="passwordVal">Password: </label>
    <input type="password" id="passwordVal" name="passwordVal" maxlength="50" size="50" required><br> <!-- TODO controllare che 8 caratteri le iniziali dei nostri nomi un numero una maiuscola e uno tra $  !  ?-->
    <span class="requirements" id="passAlert">(* la password deve contenere almeno 8 caratteri di cui anmeno uno maiuscolo, un numero, le lettere [E,F,G] e uno tra[$,!,?])</span><br><br>

    <label for="confpassword">Conferma Password: </label>
    <input type="password" id="confpassword" name="confpassword" maxlength="50" size="50" required> <br> <!-- TODO controllare che sia uguale a quella sopra-->
    <span class="alert" id="confPassAlert" hidden="true">(* le password non coincidono)</span><br><br>

    <input type="reset" value="Reset" onclick="resetForm()">
    <input type="submit" value="Invia">

    <script>

      function resetForm(){
        let ageAlert = document.querySelector("#ageAlert");
        let emailAlert = document.querySelector("#emailAlert");
        let passAlert = document.querySelector("#passAlert");
        let confPassAlert = document.querySelector("#confPassAlert");
        let emailAlertBr = document.querySelector("#emailAlertBr");
        let confPassAlertBr = document.querySelector("#confPassAlertBr");

        ageAlert.style.color = "#000000";
        ageAlert.style.fontSize = "xx-small";
        emailAlert.hidden = true;
        emailAlertBr.hidden = true;      //nascondo tutti gli i messaggi di errore
        passAlert.style.color = "#000000";
        passAlert.style.fontSize = "xx-small";
        confPassAlert.hidden = true;
        confPassAlertBr.hidden = true;

      }

      function validaForm(datadinascita, email, username, passwordVal, confpassword) {
        let ageAlert = document.querySelector("#ageAlert");
        let emailAlert = document.querySelector("#emailAlert");
        let passAlert = document.querySelector("#passAlert");
        let confPassAlert = document.querySelector("#confPassAlert");
        let emailAlertBr = document.querySelector("#emailAlertBr");
        let userAlertBr = document.querySelector("#userAlertBr");  // TODO controllare che l'username non sia gia preso, credo da servlet o abbiamo un BEAN??
        let confPassAlertBr = document.querySelector("#confPassAlertBr");


        ageAlert.style.color = "#000000";
        ageAlert.style.fontSize = "xx-small";
        emailAlert.hidden = true;
        emailAlertBr.hidden = true;      //nascondo tutti gli i messaggi di errore
        passAlert.style.color = "#000000";
        passAlert.style.fontSize = "xx-small";
        confPassAlert.hidden = true;
        confPassAlertBr.hidden = true;

        const regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        const regexPass = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/; //TODO regula exp da cambiare con quella giusta
        let nowDate = new Date();  // data di ora
        let dataNascita = new Date(datadinascita.value);

        if (  (nowDate.getFullYear() - dataNascita.getFullYear() < 18) ||  //if per controllare che la data di nascita inserita sia di un maggiorenne
                ((nowDate.getFullYear() - dataNascita.getFullYear() === 18) && (nowDate.getMonth() < dataNascita.getMonth() )) ||
                ((nowDate.getFullYear() - dataNascita.getFullYear() === 18) && (nowDate.getMonth() === dataNascita.getMonth()) && (nowDate.getDate() < dataNascita.getDate()))
        ){
          ageAlert.style.color = "#FF0000";       //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
          ageAlert.style.fontSize = "small";
          datadinascita.focus();
          alert('non sei maggiorenne!');
          return false;
        }else if(!regexEmail.test(email.value)){
          emailAlert.hidden = false;
          emailAlertBr.hidden = false;      //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
          email.focus();
          alert('Email non valida!');
          return false;
        }else if(!regexPass.test(passwordVal.value)){
          passAlert.style.color = "#FF0000";
          passAlert.style.fontSize = "small";
          passwordVal.focus();              //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
          alert('Password non valida!');
          return false;
        }else if(passwordVal.value!==confpassword.value){
          confPassAlert.hidden = false;     //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
          confPassAlertBr.hidden = false;
          passwordVal.focus();
          alert('Password non valida!');
          return false;
        }
        return true;
      }
    </script>

  </form>
  </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
