<%--
  Created by IntelliJ IDEA.
  User: gabri
  Date: 26/05/2023
  Time: 18:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>paginaDiProva.jsp</title>
</head>
<body>
  <%= session.getAttribute("nome")  %>
  <%= session.getAttribute("cognome")  %>

</body>
</html>
