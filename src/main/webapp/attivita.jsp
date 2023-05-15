<style>

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

    a.linkImg:hover {
        opacity: 0.4;
        cursor: pointer;
    }

    a.linkImg:hover > img {
        border: 3px solid rgb(0, 0, 0);
    }

    a.linkImg:hover > .text {
        opacity: 1;
    }

    /*TODO fixare posizione del testo dentro l'immagine e colore*/


    .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        opacity: 0;
    }


</style>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>



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

        <section>
            <h3> Attività 1 </h3>
            <p> Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
                Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1Attività 1
            </p>
        </section>
        <div class="im1">
            <figure id="img1">
                <a class="linkImg" href="attivita1.jsp">
                    <img src="immagini/galleria/img1.jpg" alt="Immagine prima attività" onmouseover="showCaption()" onmouseout="hideCaption()">
                    <div class="text">Scopri di più...</div>
                </a>
                <figcaption> <b><i>Attività 1</i></b> </figcaption>
            </figure>
        </div>

        <section>
            <h3>Team4World</h3>
            <p>
                L'associazione organizza attività di ricreazione per dare la possibilità a bambini e ragazzi di collaborare tra loro con spirito di squadra e, insieme, raggiungere una meta comune.
            </p>
        </section>
        <div class="im1">
            <figure>
                <a class="linkImg" href="attivita2.jsp">
                    <img src="immagini/galleria/img2.jpg" alt="Immagine seconda attività">
                </a>
                <br>
                <figcaption>  <b><i>Team4World</i></b> </figcaption>
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
        <div class="im1">
            <figure>
                <a class="linkImg" href="attivita3.jsp">
                    <img src="immagini/galleria/img3.jpg" alt="Immagine terza attività">
                </a>
                <br>
                <figcaption> <b><i>Attività 3</i></b>  </figcaption>
            </figure>
        </div>
    </div>


    <!-- todo mettere le cazzo di immagini e il cazzo di section tutti sulla stessa linea invece che uno sotto l'altro-->
    <br><br>

</main>

<jsp:include page="footer.jsp"></jsp:include>