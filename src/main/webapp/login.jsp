<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<main>
    <body>
    <div class="containerInvioConfermato">

        <form action="ServletLogin" method="post" onsubmit="return validaFormLogin(username,password)">
            <label for="username">Username: </label>
            <input type="text" id="username" username="nome" maxlength="50" size="50" required><br><br> <!-- TODO controllare che non ci sia un utente con questo username-->
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" maxlength="50" size="50" required><br><br>
            <input type="reset" value="Reset">
            <input type="submit" value="Invia">

            <script>
                function validaFormLogin(username, password) {
                    const regexPass = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/; //TODO regula exp da cambiare con quella giusta

                    if(!regexPass.test(passwordVal.value)){
                        passwordVal.focus();              //se la regola non è rispettata mostro il messaggio di errore e metto li il focus
                        alert('Password non valida!');
                        return false;
                    }
                    return true;
                }
            </script>

        </form>

    </div>

    </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
