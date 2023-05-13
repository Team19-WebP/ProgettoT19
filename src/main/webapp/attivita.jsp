<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>

<style>

    div.immagine {
        border: 2px solid #ccc;
        float: none;
        overflow: hidden;
        text-align: center;
        width: 400px;
        height: 240px;
        /* background-color: red; */
        padding-bottom: 40px;
        display: inline-block;
        margin: auto;
    }

    div.immagine:hover {
        border: 2px solid #777;
        background-color: #FFB3BF;
    }

    div.im1 figure {
        text-align: center;
    }

    div.im1 figure img {
        width: 300px;
        height: auto;
        max-height: 300px;
    }

    div.gallery figcaption {
        width: fit-content;
        height: fit-content;
        text-align: center;
        margin: auto;
    }

    figure:hover {
        opacity: 0.7;
    }

    figcaption:hover {
        cursor: pointer;
    }

</style>

<main>
    <div class="containerDescrizione">
        <section>
            <h2> Le nostre attività </h2>
            <p> Le nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attività
                Le nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attività
                Le nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attività
                Le nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attivitàLe nostre attività
            </p>
        </section>

        <div class="im1">
            <figure>
                <a href="attivita1.jsp">
                    <img src="immagini/galleria/img1.jpg" alt="Immagine prima attività">
                </a>
                <figcaption> <br> <b><i>Attività 1</i></b> </figcaption>
            </figure>
        </div>
        <section>
            <h3> Attività 1 </h3>
            <p> Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
            </p>
        </section>

        <div class="im1">
            <figure>
                <a href="attivita2.jsp">
                    <img src="immagini/galleria/img2.jpg" alt="Immagine seconda attività">
                </a>
                <br>
                <figcaption> <br> <b><i>Attività 2</i></b> </figcaption>
            </figure>
        </div>
        <section>
            <h3> Attività 2 </h3>
            <p> Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2
                Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2
                Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2
                Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2Attività 2
            </p>
        </section>

        <div class="im1">
            <figure>
                <a href="attivita3.jsp">
                    <img src="immagini/galleria/img3.jpg" alt="Immagine terza attività">
                </a>
                <br>
                <figcaption> <br> <b><i>Attività 3</i></b>  </figcaption>
            </figure>
        </div>
        <section>
            <h3> Attività 3 </h3>
            <p> Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3
                Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3
                Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3
                Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3Attività 3
            </p>
        </section>

    </div>

   <!--
    <div style="text-align: center; margin: auto">
        <div class="immagine">
            <figure>
                <a href="attivita2.jsp">
                    <img src="immagini/galleria/img2.jpg" alt="Immagine seconda attività">
                </a>
                <br>
                <figcaption> <br> <b><i>Attività 2</i></b> </figcaption>
            </figure>
        </div>
        <div class="immagine">
            <figure>
                <a href="attivita2.jsp">
                    <img src="immagini/galleria/img2.jpg" alt="Immagine seconda attività">
                </a>
                <br>
                <figcaption> <br> <b><i>Attività 2</i></b> </figcaption>
            </figure>
        </div>
        <div class="immagine">
            <figure>
                <a href="attivita2.jsp">
                    <img src="immagini/galleria/img2.jpg" alt="Immagine seconda attività">
                </a>
                <br>
                <figcaption> <br> <b><i>Attività 2</i></b> </figcaption>
            </figure>
        </div>
    </div>
    -->


    <!-- todo mettere le cazzo di immagini e il cazzo di section tutti sulla stessa linea invece che uno sotto l'altro-->
    <!-- TODO Cambiare contenitore immagini-->
    <br><br>

</main>

<jsp:include page="footer.jsp"></jsp:include>