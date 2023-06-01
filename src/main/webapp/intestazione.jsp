<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java"%>

<html lang="ita">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Tum4World</title>
    <link rel="icon" href="immagini/logoTransparentTab.png">
    <link rel="stylesheet" href="css/standard.css">
    <link rel="stylesheet" href="css/intestazione.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/infoCookies.css">

</head>

<jsp:useBean id="counterGenerale" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterGenerale" property="hits" value="0"/>

<body>

    <header class="intestazione">
        <div>
            <img class="logo" id="logoLeft" src="immagini/logoTransparent.png" alt="logo">
        </div>
        <h1>Tum<strong>4</strong>World</h1>
        <div>
            <img class="logo" src="immagini/logoTransparent.png" alt="logo">
        </div>
    </header>

    <nav class="menu">
        <a href="home.jsp">Home</a>
        <a href="chisiamo.jsp">Chi Siamo</a>
        <div class="dropdown">
            <a class="dropbtn" href="attivita.jsp">Attività
            </a>
            <div class="dropdown-content">
                <a href="attivita1.jsp">Aisha</a>
                <a href="attivita2.jsp">Team4World</a>
                <a href="attivita3.jsp">Abc4Future</a>
            </div>
        </div>
        <a href="contatti.jsp">Contatti</a>
        <%
            if(session == null || session.getAttribute("type") == null) {
                //se l'utente non è loggato allora farò vedere i bottoni login e signin
        %>
        <a href="signin.jsp">Sign-in</a>
        <a href="login.jsp">Login</a>
        <% } else {
                //altrimenti al loro posto vi saranno logout e la pagina privata
            if(session.getAttribute("type").equals("amministratore")){
                //che però deve mandare alla pagina giusta in base ai privilegi dell'utente
        %>
        <a href="amministratore.jsp">Pagina personale</a>
        <%
            } else if(session.getAttribute("type").equals("aderente")) {
        %>
        <a href="aderente.jsp">Pagina personale</a>
        <%
            } else if(session.getAttribute("type").equals("simpatizzante")) {
        %>
        <a href="simpatizzante.jsp">Pagina personale</a>
        <% }
        %>
        <a href="ServletLogout">Logout</a>
        <%}%>
    </nav>
    <jsp:include page="informativaCookies.jsp"></jsp:include>
