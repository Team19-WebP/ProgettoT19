
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:useBean id="counterProfiloEliminato" class="unitn.disi.web.progettoteam19.Counter" scope="application"></jsp:useBean>
<jsp:setProperty name="counterProfiloEliminato" property="hits" value="0"/>
<main>
  <jsp:include page="frasiIspiranti.jsp"></jsp:include><br><br>
  <div class="containerInvioConfermato">
    <div class="containerDescrizione">
      <h2>Profilo eliminato con successo!</h2>
      <p>Torna alla <a href="home.jsp">home</a>!</p>
    </div>
  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
