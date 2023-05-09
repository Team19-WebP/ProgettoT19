<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>

<style>

    div.immagine {
        border: 2px solid #ccc;
        float: none;
        overflow: hidden;
        text-align: center;
        width: 30%;
        height: auto;
        /* background-color: red; */
        padding-bottom: 40px;
        display: inline-block;
        margin: auto;
    }

    div.immagine:hover {
        border: 2px solid #777;
        background-color: #FFB3BF;
    }

    div.gallery figure {
        text-align: center;
    }

    div.immagine figure img {
        width: 100%;
        height: auto;
    }

    div.gallery figcaption {
        width: fit-content;
        height: fit-content;
        text-align: center;
        margin: auto;
    }


</style>

<main>
    <div class="descrizioneAttivita">
        <section>
            <h2> Le nostre attività </h2>
            <p> Le nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attività
                Le nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attività
                Le nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attività
                Le nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attività
            </p>
        </section>

        <section>
            <h3> Attività 1 </h3>
            <p> Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
            </p>
        </section>

        <section>
            <h3> Attività 2 </h3>
            <p> Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2
                Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2
                Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2
                Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2
            </p>
        </section>

        <section>
            <h3> Attività 3 </h3>
            <p> Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3
                Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3
                Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3
                Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3
            </p>
        </section>

    </div>

    <div class="immagine">
        <figure>
            <a href="attivita1.jsp">
                <img src="immagini/galleria/img1.jpg" alt="Immagine prima attività">
            </a>
            <figcaption>Attività 1</figcaption>
        </figure>
    </div>
    <div class="immagine">
        <figure>
            <a href="attivita2.jsp">
                <img src="immagini/galleria/img2.jpg" alt="Immagine seconda attività">
            </a>
            <figcaption>Attività 2</figcaption>
        </figure>
    </div>
    <div class="immagine">
        <figure>
            <a href="attivita3.jsp">
                <img src="immagini/galleria/img3.jpg" alt="Immagine terza attività">
            </a>
            <figcaption>Attività 3</figcaption>
        </figure>
    </div>

</main>

<jsp:include page="footer.jsp"></jsp:include>