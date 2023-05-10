<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<main>
    <body>
    <form>
        <label for="username">Username: </label>
        <input type="text" id="username" username="nome" maxlength="50" size="50" required><br><br> <!-- TODO controllare che non ci sia un utente con questo username-->
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" maxlength="50" size="50" required><br><br> <!-- TODO controllare che 8 caratteri le iniziali dei nostri nomi un numero una maiuscola e uno tra $  !  ?-->
        <input type="reset" value="Reset">
        <input type="submit" value="Invia">
    </form>
    </body>
</main>
<jsp:include page="footer.jsp"></jsp:include>
