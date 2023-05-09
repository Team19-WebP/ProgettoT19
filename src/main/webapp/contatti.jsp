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
            <label for="email">Indirizzo email: </label>
            <input type="text" id="email" name="email" maxlength="50" size="50" required><br><br>
            <label for="comboBox"> Indica il motivo del contatto:</label>
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
            <select id="comboBox" name="comboBox">
                <option value="unirsi">Mi piacerebbe unirmi all'associazione Tum4world</option>
                <option value="info">Vorrei saperne di più su quello che fate</option>
                <option value="altro">Altro...</option>
            </select><br><br>
            <label for="richiesta">Se vuoi puoi specificare una particolare richiesta:</label>
            <textarea id="richiesta" name="richiesta" maxlength="300" cols="100" rows="3"></textarea><br><br>
            <input type="submit" value="Invia">
            <input type="reset" value="Reset">
        </form>
    </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
