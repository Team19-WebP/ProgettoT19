<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java"%>

<html lang="ita">
<jsp:useBean id="counterGenerale" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterGenerale" property="hits" value="0"/>
<jsp:useBean id="utenteLoggato" class="unitn.disi.web.progettoteam19.model.User" scope="session"/>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Tum4World</title>
    <link rel="icon" href="immagini/logoTransparentTab.png">
    <link rel="stylesheet" href="css/standard.css">
    <%-- Controllo se l'utente è loggato e a seconda della tipologia carico il rispettivo css --%>
    <%
    if(session != null){
        if(session.getAttribute("type") != null && session.getAttribute("type").equals("aderente")){

    %>
    <link rel="stylesheet" href="css/aderente.css">
    <%
        } else if(session.getAttribute("type") != null && session.getAttribute("type").equals("simpatizzante")){
    %>
    <link rel="stylesheet" href="css/simpatizzante.css">
    <%
        } else if(session.getAttribute("type") != null && session.getAttribute("type").equals("amministratore")){
    %>
    <link rel="stylesheet" href="css/amministratore.css">
    <%
        }
    }
    %>
</head>

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
        <a href= <%= response.encodeURL("home.jsp")%> >Home</a>
        <a href=  <%= response.encodeURL("chisiamo.jsp")%> >Chi Siamo</a>
        <div class="dropdown">
            <a class="dropbtn" href=  <%= response.encodeURL("attivita.jsp")%> >Attività
            </a>
            <div class="dropdown-content">
                <a href=  <%= response.encodeURL("attivita1.jsp")%> >Aisha</a>
                <a href=  <%= response.encodeURL("attivita2.jsp")%> >Team4World</a>
                <a href=  <%= response.encodeURL("attivita3.jsp")%> >Abc4Future</a>
            </div>
        </div>
        <a href=  <%= response.encodeURL("contatti.jsp")%> >Contatti</a>
        <%
            if(session == null || session.getAttribute("type") == null) {
                //se l'utente non è loggato allora farò vedere i bottoni login e signin
        %>
        <a href= <%= response.encodeURL("signin.jsp")%>>Sign-in</a>
        <a href= <%= response.encodeURL("login.jsp")%> >Login</a>
        <% } else {
                //altrimenti al loro posto vi saranno logout e la pagina privata
            if(session.getAttribute("type").equals("amministratore")){
                //che però deve mandare alla pagina giusta in base ai privilegi dell'utente
        %>
        <a href= <%= response.encodeURL("amministratore.jsp")%> >Pagina personale</a>
        <%
            } else if(session.getAttribute("type").equals("aderente")) {
        %>
        <a href= <%= response.encodeURL("aderente.jsp")%> >Pagina personale</a>
        <%
            } else if(session.getAttribute("type").equals("simpatizzante")) {
        %>
        <a href= <%= response.encodeURL("simpatizzante.jsp")%> >Pagina personale</a>
        <% }
        %>
        <a href=  <%= response.encodeURL("ServletLogout")%> >Logout</a>
        <%}%>
    </nav>
    <jsp:include page="informativaCookies.jsp"></jsp:include>
