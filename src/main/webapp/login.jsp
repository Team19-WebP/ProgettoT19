<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:include page="frasiIspiranti.jsp"></jsp:include>
<main>
    <div class="formContSignLog" id="divLogin">
        <p>Non hai un account? Registrati <a href="signin.jsp">qui</a>!</p>
        <form action="ServletLogin" method="post" onsubmit="return validaFormLogin()">
            <div class="inputAndLabel">
                <label for="username">Username: </label>
                <input type="text" id="username" username="nome" maxlength="50" size="50"><br><br> <!-- TODO controllare che non ci sia un utente con questo username-->
            </div>
            <div class="inputAndLabel">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" maxlength="50" size="50"><br><br>
            </div>
            <div class="inputAndLabel" id="submitReset">
                <input type="reset" value="Reset">
                <input type="submit" value="Invia">
            </div>

            <%--<script src="scripts/login.js" rel="script"></script>  inporto lo script da un file esterno per modularità --%>

            <script>
                /* Ho tirato via la regex della password, così può entrare anche l'amministratore.*/
                let user = document.getElementById("username");
                let password = document.getElementById("password");
                let requiredElements = document.querySelectorAll(".inputAndLabel input[type='text'], .inputAndLabel input[type='password']");
                function validaFormLogin() {
                    resetForm();
                    let valido = true;
                    requiredElements.forEach(function (element) {
                        /*DEBUG*/
                        console.log("Controllando " + element.name);
                        /*DEBUG*/
                        /*se il campo è vuoto*/
                        if (element.value === "") {
                            /*facilito la userEXP rimandando il focus e lo screen sul campo mancante
                            * evidenziando di rosso il bordo e aggiungendo un messaggio di errore sotto
                            * il campo
                            * */
                            element.focus();
                            element.scrollIntoView({behavior: "smooth", block: "center"});
                            element.style.borderColor = "#FF0000";
                            const messaggioErrore = document.createElement("span");
                            messaggioErrore.className = "errore";
                            messaggioErrore.textContent = "Per favore inserire " + element.name;
                            messaggioErrore.style.fontSize = "x-small";
                            messaggioErrore.style.color = "#FF0000";
                            element.parentNode.appendChild(messaggioErrore);
                            /*invalido la submit*/
                            valido = false;
                        } else {
                            element.style.borderColor = "#000000";
                        }
                    });
                    return valido;
                }
                function resetForm() {
                    requiredElements.forEach(function(element) {
                        element.style.borderColor = "#000000";
                    });
                    let messaggiErrore = document.querySelectorAll(".inputAndLabel .errore");
                    if (messaggiErrore !== null) {
                        messaggiErrore.forEach(function(element) {
                            element.remove();
                        });
                    }
                }
            </script>
        </form>

    </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
