<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:include page="frasiIspiranti.jsp"></jsp:include>
<main>
  <style>

  </style>
    <div class="formContSignLog">
    <p>Hai già un account? Esegui il <a href="login.jsp">login</a>!</p>
        <form action="ServletSignin" method="post"
              onsubmit="return validaForm(datadinascita, email, username, passwordVal, confpassword )">
            <div class="inputAndLabel">
                <label for="nome">Nome: </label>
                <input type="text" id="nome" name="nome" maxlength="50" size="50" placeholder="Mario" required>
                <!-- TODO style="margin-left: 4ch"-->
            </div>
            <br>
            <div class="inputAndLabel">
                <label for="cognome">Cognome: </label>
                <input type="text" id="cognome" name="cognome" maxlength="50" size="50" placeholder="Rossi" required>
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="datadinascita">Data di nascita: </label>
                <input type="date" id="datadinascita" name="datadinascita" maxlength="50" size="50" required>
                <span id="ageAlert" class="requirements">(* per registrarisi è necessario essere maggiorenni)</span>
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="email">Indirizzo email: </label>
                <input type="text" id="email" name="email" maxlength="50" size="50" placeholder="mario.rossi@gmail.com"
                       required>
                <span id="emailAlert" class="alert" hidden="true">(* mail non valida)</span><br>
            </div>
            <br>
            <div class="inputAndLabel">
                <label for="telefono">numero di telefono: </label>  <!-- TODO permettere inserimento solo numeri-->
                <input type="tel" id="telefono" name="telefono" maxlength="15" size="15" placeholder="345 1234567"
                       pattern="[0-9]{10}" required>
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="comboBox" id="comboBoxLabel"> Voglio iscrivermi come:</label>
                <select id="comboBox" name="comboBox">
                    <option value="simpatizzante">simpatizzante</option>
                    <option value="aderente">aderente</option>
                </select>
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" maxlength="50" size="50" placeholder="_RMario_"
                       required> <br> <!-- TODO controllare che non ci sia un utente con questo username-->
                <span class="alert" id="userAlert" hidden="true">(* username gia preso) </span>
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="passwordVal">Password: </label>
                <input type="password" id="passwordVal" name="passwordVal" maxlength="50" size="50" required>
                <span class="requirements" id="passAlert">(* la password deve contenere almeno 8 caratteri di cui anmeno uno maiuscolo, un numero, le lettere [E,F,G] e uno tra[$,!,?])</span>
            </div>
            <br>
            <div class="inputAndLabel">
                <label for="confpassword">Conferma Password: </label>
                <input type="password" id="confpassword" name="confpassword" maxlength="50" size="50" required>
                <span class="alert" id="confPassAlert" hidden="true">(* le password non coincidono)</span>
            </div>
            <br>
            <div class="inputAndLabel" id="submitReset">
                <input type="reset" value="Reset" onclick="resetForm()">
                <input type="submit" value="Invia">
            </div>
            <script>
                let ageAlert = document.querySelector("#ageAlert");
                let emailAlert = document.querySelector("#emailAlert");
                let passAlert = document.querySelector("#passAlert");
                let confPassAlert = document.querySelector("#confPassAlert");

                const regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
                const regexPass = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/; //TODO regula exp da cambiare con quella giusta

                function validaForm(datadinascita, email, username, passwordVal, confpassword) {
                    resetForm();
                    let nowDate = new Date();  // data di ora
                    let dataNascita = new Date(datadinascita.value);
                    if ((nowDate.getFullYear() - dataNascita.getFullYear() < 18) ||  //if per controllare che la data di nascita inserita sia di un maggiorenne
                        ((nowDate.getFullYear() - dataNascita.getFullYear() === 18) && (nowDate.getMonth() < dataNascita.getMonth())) ||
                        ((nowDate.getFullYear() - dataNascita.getFullYear() === 18) && (nowDate.getMonth() === dataNascita.getMonth()) && (nowDate.getDate() < dataNascita.getDate()))
                    ) {
                        ageAlert.style.color = "#FF0000";       //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
                        ageAlert.style.fontSize = "small";
                        datadinascita.focus();
                        alert('non sei maggiorenne!');
                        return false;
                    } else if (!regexEmail.test(email.value)) {
                        emailAlert.hidden = false;       //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
                        email.focus();
                        alert('Email non valida!');
                        return false;
                    } else if (!regexPass.test(passwordVal.value)) {
                        passAlert.style.color = "#FF0000";
                        passAlert.style.fontSize = "small";
                        passwordVal.focus();              //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
                        alert('Password non valida!');
                        return false;
                    } else if (passwordVal.value !== confpassword.value) {
                        confPassAlert.hidden = false;     //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
                        passwordVal.focus();
                        alert('Password non valida!');
                        return false;
                    }
                    return true;
                }

                function resetForm() {
                    ageAlert.style.color = "#000000";
                    ageAlert.style.fontSize = "xx-small";
                    emailAlert.hidden = true;       //nascondo tutti gli i messaggi di errore
                    passAlert.style.color = "#000000";
                    passAlert.style.fontSize = "xx-small";
                    confPassAlert.hidden = true;
                }
            </script>
            <%-- <script rel="script" src="/scripts/signin.js"></script>  TODO capire perchè non funziona importando (ALERT) --%>
        </form>
    </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
