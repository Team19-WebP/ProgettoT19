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
        <div class="containerDescrizione">
            <ul>
                <li><h3>Email: tum4world@nessunonoluogonoesiste.com</h3></li>
                <li><h3>Telefono: +39 0461 123456</h3></li>
            </ul><br><br>
            <h2>Per saperne di più, inserisci i tuoi dati:</h2>
        </div>

        <form action="ServletFormContatti" method="post" onsubmit="return validaEmail(email.value)">
            <label for="nome">Nome: </label>
            <input type="text" id="nome" name="nome" placeholder="inserisci il tuo nome..." maxlength="50" size="50"
            required><br><br>
            <label for="cognome">Cognome: </label>
            <input type="text" id="cognome" name="cognome" placeholder="inserisci il tuo cognome..." maxlength="50"
            size="50" required><br><br>
            <label for="email">Email: </label>
            <input type="text" id="email" name="email" placeholder="inserisci la tua email..." maxlength="50" size="50"
            required><br><br>
            <label for="comboBox">Motivo del contatto:</label>

            <%-- per utilizzare input radio al posto della comboBox...

            <input type="radio" id="unirsi" name="altroRadio" value="Mi piacerebbe unirmi all'associazione
            Tum4world." required>
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
            </script> --%>

            <select id="comboBox" name="comboBox">
                <option value="iscrizione">Mi piacerebbe unirmi alla vostra associazione</option>
                <option value="info">Vorrei saperne di più su quello che fate</option>
                <option value="altro">Altro...</option>
            </select><br><br>
            <%-- <label for="altroTextarea">Se vuoi puoi specificare una richiesta:</label><br> --%>
            <textarea id="altroTextarea" name="altroTextarea" maxlength="300" cols="100" rows="3" hidden="true"
            required></textarea><br><br>

            <%-- script che abilita la textarea solo se viene selezionata l'opzione "altro" dalla comboBox --%>
            <script>
                let comboBox = document.querySelector("#comboBox");
                let altroTextarea = document.querySelector("#altroTextarea");

                altroTextarea.disabled = true;

                comboBox.addEventListener("change", stateHandleTextarea);

                function stateHandleTextarea() {
                    if (comboBox.value == "altro") {
                        altroTextarea.disabled = false;
                        altroTextarea.hidden = false;
                        <%-- per selezionare la textarea --%>
                        altroTextarea.focus();
                        altroTextarea.scrollIntoView();
                        altroTextarea.placeholder = "inserisci il motivo del contatto...";
                    } else {
                        altroTextarea.disabled = true;
                        altroTextarea.hidden = true;
                        <%-- per cancellare il contenuto della textarea --%>
                        altroTextarea.value = "";
                        altroTextarea.placeholder = "";
                    }
                }
            </script>

            <input type="reset" value="Reset" onclick="nascondiTextarea()">
            <input type="submit" value="Invia">

            <%-- script che verifica la validita' dell'email --%>
            <script>
                function validaEmail(email) {
                    var regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
                    if (!regex.test(email)) {
                        alert('Email non valida');
                        return false;
                    }
                    return true;
                }
            </script>

            <%-- script che nasconde la textarea --%>
            <script>
                function nascondiTextarea() {
                    altroTextarea.hidden = true;
                }
            </script>

        </form>
    </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
