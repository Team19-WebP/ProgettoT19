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

            <script src="scripts/login.js" rel="script"></script>
        </form>

    </div>

    </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
