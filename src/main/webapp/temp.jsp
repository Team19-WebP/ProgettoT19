
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:useBean id="counterInvioConfermato" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterInvioConfermato" property="hits" value="0"/>
<main>
    <jsp:include page="frasiIspiranti.jsp"></jsp:include><br><br>
    <div class="containerInvioConfermato">
        <div class="containerDescrizione">
            <h2>Username già preso</h2> <%--TODO c'è scritto di rimandare alla pagina sign-in con un messaggio di errore che dice: "19: Username già preso, provare con un altro."--%>
        </div>
    </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
