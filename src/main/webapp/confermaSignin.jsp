
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:useBean id="counterConfermaSignIn" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterConfermaSignIn" property="hits" value="0"/>
<main>
  <jsp:include page="frasiIspiranti.jsp"></jsp:include><br><br>
  <div class="containerInvioConfermato">
    <div class="containerDescrizione">
      <h2>Abbiamo inviato una E-mail di conferma al tuo indirizzo E-mail, segui il link contenuto nella mail per concludere l'iscrizione</h2>
    </div>
  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
