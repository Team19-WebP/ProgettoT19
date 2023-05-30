<%--
  Created by IntelliJ IDEA.
  User: giuli
  Date: 12/05/2023
  Time: 11:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:useBean id="counterError" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterError" property="hits" value="0"/>
<main>
  <h3>Hits della pagina: <jsp:getProperty name="counterError" property="hits"/></h3>
  <jsp:include page="frasiIspiranti.jsp"></jsp:include><br><br>
  <div class="containerInvioConfermato">
    <div class="containerDescrizione">
      <h2>ERROR 418 cosa ci fai qui??</h2>
    </div>
  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
