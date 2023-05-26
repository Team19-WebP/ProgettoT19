<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.SQLException" %>
<%@ page import="java.sql.Statement" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java"%>

<%!

  String dbURL = "jdbc:derby://localhost:1527/PrimoDB";

  String user = "App";
  String password = "pw";
  Connection conn = null;

  public void jspInit(){
    try {
      Class.forName("org.apache.derby.jdbc.ClientDriver");
      conn = DriverManager.getConnection(dbURL, user, password);

      Statement stmt = conn.createStatement();
      stmt.executeUpdate("INSERT INTO Utenti VALUES ('Gabriele', 'Volani', 21)");
      stmt.executeUpdate("INSERT INTO Utenti VALUES ('Stefano', 'Baldi', 15)");
      stmt.executeUpdate("INSERT INTO Utenti VALUES ('Mirco', 'Nardin', 68)");
      stmt.executeUpdate("INSERT INTO Utenti VALUES ('Leonardo', 'Goller', 28)");
      stmt.executeUpdate("INSERT INTO Utenti VALUES ('Nicolas', 'Gonzalez', 24)");
      stmt.close();

    } catch (ClassNotFoundException | SQLException ex) {
      ex.printStackTrace();
    }
  }

  public void jspDestroy(){
    try {
      Statement stmt = conn.createStatement();
      stmt.executeUpdate("DROP TABLE Utenti");

      conn.close();
    } catch (SQLException ex) {
      ex.printStackTrace();
    }
  }

%>

<%
  application.setAttribute("conn", conn);
%>

<jsp:include page="intestazione.jsp"></jsp:include>
<main>
  <jsp:include page="frasiIspiranti.jsp"></jsp:include>
  <div class="containerLogoDescrizione">
    <div class="imageContainer">
      <img id="logoHome" src="immagini/logo_home_new.png" alt="Logo con la scritta Tum4World.">
    </div>
    <div class="containerDescrizione" id="descrizioneHome">
      <h2>Legami che tessono comunità, un'attività alla volta!</h2>
      <p>
        Come associazione <strong>Tum4World</strong> si impegna a promuovere l'inclusione sociale,
        la partecipazione e la coesione attraverso la creazione di attività coinvolgenti
        che favoriscono la formazione di legami e il senso di appartenenza all'interno di una comunità.
      </p>
    </div>
  </div>
  <div class="containerFoto">
    <img id="imgAssociazione" src="https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Persone Diverse Positive Che Fanno Le Facce Alla Macchina Fotografica">
  </div>
  <div id="downloadLeaflet">
    <a href="immagini/leafletLR.pdf" download> Download Leaflet
    </a>
  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
