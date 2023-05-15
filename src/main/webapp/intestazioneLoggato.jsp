<!-- <!DOCTYPE html> -->
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>

<html lang="ita">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title>Tum4World</title>
    <link rel="icon" href="immagini/logoTransparentTab.png">
    <link rel="stylesheet" href="css/standard.css">
    <link rel="stylesheet" href="css/intestazione.css">
    <link rel="stylesheet" href="css/footer.css">

   <!-- CSS per le iconcine-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


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
    <div class="infondo">
        <a href="paginapersonale.jsp"><i class="fa fa-fw fa-user"></i>Profilo</a>
        <a id="logout" href="logout.jsp"><i class="fa fa-sign-out"></i>Logout</a>
        <!-- TODO fixare piccolo spazio compreso tra proiflo e logout-->
    </div>
</nav>

<style>

    .infondo {
        float: right;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;

    }


    #logout {
        background-color: red;
    }

    #logout:hover {
        background-color: #810000;
    }

</style>
