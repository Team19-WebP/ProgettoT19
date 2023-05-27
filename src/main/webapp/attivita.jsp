<style>


</style>

<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:include page="frasiIspiranti.jsp"></jsp:include>

<main>
    <div class="containerAttivita containerDescrizione">
        <section class="sectionTitolo">
            <h2>Le nostre attività</h2>
            <p>
                L'associazione Tum4World si impegna a fornire cibo e acqua potabile ai paesi più poveri dell'Africa, portando speranza e felicità nei villaggi. Promuove il lavoro di squadra tra i giovani, formando i leader di domani e offre opportunità di istruzione digitale alle comunità rurali, per un futuro più inclusivo e tecnologicamente avanzato.
            </p>
        </section>
        <br><br>

        <section class="sectionTesto">
<%--        <section class="containerLogoDescrizione">&lt;%&ndash;&ndash;%&gt;--%>
            <div class="im1">
                <figure>
                    <h3>Aisha</h3>
                    <a class="linkImg" href="attivita1.jsp">
                        <img src="immagini/galleria/img1.jpg" alt="Immagine prima attività">
                        <div class="text">Scopri di più...</div>
                    </a>
                    <%--<br><figcaption><b><i>Attività 1</i></b></figcaption>--%>
                </figure>
            </div>
            <p>
                L'associazione Tum4World si dedica con passione a fornire cibo e acqua potabile ai paesi più poveri dell'Africa. Con il tuo aiuto prezioso, possiamo portare speranza e felicità ai bambini e alle famiglie dei villaggi più sperduti e a volte dimenticati.
            </p>

        </section>
        <br><br>

        <section class="sectionTesto">
            <div class="im1">
                <figure>
                    <h3>Team4World</h3>
                    <a class="linkImg" href="attivita2.jsp">
                        <img src="immagini/attivita/img2.jpg" alt="Immagine di Team4World">
                        <div class="text">Scopri di più...</div>
                    </a>
                    <%--<br><figcaption> <b><i>Team4World</i></b> </figcaption>--%>
                </figure>
            </div>
            <p>
                Il progetto Team4World si impegna a offrire opportunità e sostegno ai giovani attraverso la promozione del lavoro di squadra. Le settimane ricreative organizzate coinvolgono i partecipanti in attività di team building che favoriscono la collaborazione.
            </p>
        </section>
        <br><br>

        <section class="sectionTesto">
            <div class="im1">
                <figure>
                    <h3>Abc4Future</h3>
                    <a class="linkImg" href="attivita3.jsp">
                        <img src="immagini/attivita/img3.jpg" alt="Immagine di Abc4Future">
                        <div class="text">Scopri di più...</div>
                    </a>
                    <%--<br><figcaption> <b><i>Abc4Future</i></b> </figcaption>--%>
                </figure>
            </div>
            <p>
                Il progetto Abc4Future mira a offrire opportunità di istruzione digitale alle comunità rurali dell'Africa. Attraverso la costruzione di scuole e l'apporto di volontari esperti, il progetto fornisce conoscenze di base sulle tecnologie digitali.
            </p>
        </section>
    </div>
    <br><br>
</main>

<jsp:include page="footer.jsp"></jsp:include>