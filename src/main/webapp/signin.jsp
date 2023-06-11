<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<jsp:useBean id="counterSignin" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterSignin" property="hits" value="0"/>


<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:include page="frasiIspiranti.jsp"></jsp:include>

<main>
    <div class="formContSignLog">
    <%
        if(request.getParameter("errore") != null && request.getParameter("errore").equals("true")) {
    %>
    <div id="mexerr">
        <p style="color: red" >19: Username non disponibile!</p>
    </div>

    <%
        }%>
        <p>Hai già un account? Esegui il <a href=  <%= response.encodeURL("login.jsp")%> >login</a>!</p>
        <form action=  <%= response.encodeURL("ServletSignin")%> method="post"
               onsubmit="return validaForm()">
            <div class="inputAndLabel">
                <label for="nome">Nome: </label>
                <input type="text" id="nome" name="nome" placeholder="inserisci il tuo nome..." maxlength="50" size="50">
            </div>
            <br>
            <div class="inputAndLabel">
                <label for="cognome">Cognome: </label>
                <input type="text" id="cognome" name="cognome" placeholder="inserisci il tuo cognome..." maxlength="50" size="50">
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="datadinascita">Data di nascita: </label>
                <input type="date" id="datadinascita" name="datadinascita" maxlength="50" size="50">
                <span id="ageAlert" class="requirements">(* per registrarsi è necessario essere maggiorenni)</span>
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="email">Indirizzo email: </label>
                <input type="text" id="email" name="email" placeholder="inserisci la tua email..." maxlength="50" size="50">
                <span id="emailAlert" class="alert" hidden="true">(* mail non valida)</span><br>
            </div>
            <br>
            <div class="inputAndLabel">
                <label for="telefono">numero di telefono: </label>
                <input type="number" id="telefono" name="telefono" placeholder="inserisci il tuo numero di telefono..." maxlength="15" size="15">
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="comboBox" id="comboBoxLabel">Voglio iscrivermi come: </label>
                <select id="comboBox" name="comboBox">
                    <option value="simpatizzante">simpatizzante</option>
                    <option value="aderente">aderente</option>
                </select>
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" placeholder="inserisci uno username..." maxlength="50" size="50">
                <span class="alert" id="userAlert" hidden="true">(* username gia preso) </span>
            </div>
            <br><br>
            <div class="inputAndLabel">
                <label for="passwordVal">Password: </label>
                <input type="password" id="passwordVal" name="passwordVal" placeholder="inserisci una password..." maxlength="50" size="50">
                <span class="requirements" id="passAlert">(* la password deve contenere almeno 8 caratteri di cui almeno uno maiuscolo, un numero, le lettere [E,F,G] e uno tra[$,!,?])</span>
            </div>
            <br>
            <div class="inputAndLabel">
                <label for="confpassword">Conferma Password: </label>
                <input type="password" id="confpassword" name="confpassword" placeholder="conferma la password..." maxlength="50" size="50">
                <span class="alert" id="confPassAlert" hidden="true">(* le password non coincidono)</span>
            </div>
            <br>
            <div class="inputAndLabel" id="submitReset">
                <input type="reset" value="Reset" onclick="resetForm()">
                <input type="submit" value="Invia">
            </div>
        </form>
        <script src="scripts/signin.js"></script>
    </div>
</main>

<jsp:include page="footer.jsp"></jsp:include>
