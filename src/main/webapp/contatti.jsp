<%--
  Created by IntelliJ IDEA.
  User: Enrico
  Date: 08/05/2023
  Time: 13:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:include page="frasiIspiranti.jsp"></jsp:include>
<jsp:useBean id="counterContatti" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterContatti" property="hits" value="0"/>
<main>
    <div class="formContSignLog containerDescrizione" >
        <p>
            Per qualsiasi domanda o informazione non esitare a contattarci scrivendoci a tum4world@nessunluogonoesiste.com,
            chiamandoci allo +39 0461 123456 dal lunedì al venerdì dalle 8:00 alle 17:00 oppure contattaci utilizzando il form
            presente qui sotto, ti risponderemo al più presto!
        </p>
<%--        <ul>--%>
<%--            <li><h3>Email: </h3></li>--%>
<%--            <li><h3>Telefono: +39 0461 123456</h3></li>--%>
<%--        </ul><br><br>--%>
<%--        <h2>Per saperne di più, inserisci i tuoi dati:</h2>--%>
    </div>
    <br>
    <div> <%-- TODO metterlo in un css  style="height: 60%"--%>
    <form action="ServletFormContatti" method="post" onsubmit="return validaEmail()">
        <div class="inputAndLabel">
            <label for="nome">Nome: </label>
            <input type="text" id="nome" name="nome" placeholder="inserisci il tuo nome..." maxlength="50" size="100">
        </div>
        <br><br>
        <div class="inputAndLabel">
            <label for="cognome">Cognome: </label>
            <input type="text" id="cognome" name="cognome" placeholder="inserisci il tuo cognome..." maxlength="50"
            size="100">
        </div>
        <br><br>
        <div class="inputAndLabel">
            <label for="email">Email: </label>
            <input type="text" id="email" name="email" placeholder="inserisci la tua email..." maxlength="50" size="100">
        </div>
        <span id="emailAlert" class="alert" hidden="true">(* mail non valida)</span><br>
        <br><br>
        <div class="inputAndLabel">
            <label for="comboBox" id="comboBoxLabel">Motivo del contatto:</label><br>

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
            </select>
        </div>
        <br><br>
        <%-- <label for="altroTextarea">Se vuoi puoi specificare una richiesta:</label><br> --%>
        <textarea id="altroTextarea" name="altroTextarea" maxlength="300" cols="100" rows="3" hidden="true"></textarea><br><br>


        <script rel="script" src="scripts/contatti.js"></script> <%-- includo gli script da un file esterno per modularità --%>
        <div class="inputAndLabel" id="submitReset">
            <input type="reset" value="Reset" onclick="resetContatti()">
            <input type="submit" value="Invia">
        </div>
    </form>
    </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
