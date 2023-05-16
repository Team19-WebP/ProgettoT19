<!-- <!DOCTYPE html> -->
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" session="false"%>

<html lang="ita">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Tum4World</title>
    <link rel="icon" href="immagini/logoTransparentTab.png">
    <link rel="stylesheet" href="css/standard.css">
    <link rel="stylesheet" href="css/intestazione.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/cookies.css">

</head>
<%-- Imposto la classe css per rendere opaco e inattivo tutto il body finchè l'utente non prende una decisione. --%>
<body class='<%= request.getSession().getAttribute("bannerCookies").equals(true) ? "copertoCookies" : "" %>'>

    <header class="intestazione" class='<%= request.getSession().getAttribute("bannerCookies").equals(true) ? "copertoCookies" : "" %>'>
        <div>
            <img class="logo" id="logoLeft" src="immagini/logoTransparent.png" alt="logo">
        </div>
        <h1>Tum<strong>4</strong>World</h1>
        <div>
            <img class="logo" src="immagini/logoTransparent.png" alt="logo">
        </div>
    </header>

    <nav class="menu" class='<%= request.getSession().getAttribute("bannerCookies").equals(true) ? "copertoCookies" : "" %>'>
        <a href="home.jsp">Home</a>
        <a href="chisiamo.jsp">Chi Siamo</a>
        <div class="dropdown">
            <a class="dropbtn" href="attivita.jsp">Attività
            </a>
            <div class="dropdown-content">
                <a href="attivita1.jsp">Attività 1</a>
                <a href="attivita2.jsp">Team4World</a>
                <a href="attivita3.jsp">Attività 3</a>
            </div>
        </div>
        <a href="contatti.jsp">Contatti</a>
        <a href="signin.jsp">Sign-in</a>
        <a href="login.jsp">Login</a>
    </nav>
    <%--
          Controllo se bisogna mostrare il banner, l'attributo bannerCookies viene impostato su true dal filtro
          userFilter.java se la sessione è nuova
     --%>
    <jsp:include page="cookiesBanner.jsp"></jsp:include>


