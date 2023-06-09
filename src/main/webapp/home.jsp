<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java"%>

<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:useBean id="counterHome" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterHome" property="hits" value="0"/>
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
    <a href="immagini/leafletT4WA5.pdf" download> <button>Download Leaflet</button>
    </a>
  </div>
</main>
<jsp:include page="footer.jsp"></jsp:include>
