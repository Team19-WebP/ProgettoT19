
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:useBean id="counterLogout" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterLogout" property="hits" value="0"/>
<main>
  <jsp:include page="frasiIspiranti.jsp"></jsp:include><br><br>
  <div class="containerInvioConfermato">
    <div class="containerDescrizione">
      <h2>Logout effettuato con successo</h2>
      <p>Torna alla <a href= <%= response.encodeURL("home.jsp")%> >home</a>!</p>
    </div>
  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
