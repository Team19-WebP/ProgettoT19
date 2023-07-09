<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>

<script src="scripts/chiSiamo.js" rel="script"></script> <%-- includo lo script che fa funzionare la galleria delle immagini da un file esterno per modularità --%>

<jsp:useBean id="counterChiSiamo" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterChiSiamo" property="hits" value="0"/>
<main>
 <div class="containerAttivita">
  <jsp:include page="frasiIspiranti.jsp"></jsp:include>
 <div class="containerDescrizione" id="descrizioneChiSiamo">
   <h2>
    Legami che tessono comunità, un'attività alla volta!
   </h2>

  <div class="collezioneDiImmagini">

   <div class="singleImage" style="display: block;">
    <div class="numbertext">1 / 5</div>
    <img src="immagini/galleria/img1.jpg">
    <div class="textChiSiamo">Caption One</div>
   </div>

   <div class="singleImage">
    <div class="numbertext">2 / 5</div>
    <img src="immagini/attivita/img2.jpg">
    <div class="textChiSiamo">Caption Two</div>
   </div>

   <div class="singleImage">
    <div class="numbertext">3 / 5</div>
    <img src="immagini/galleria/img3.jpg">
    <div class="textChiSiamo">Caption Three</div>
   </div>

   <div class="singleImage">
    <div class="numbertext">4 / 5</div>
    <img src="immagini/galleria/img4.jpg">
    <div class="textChiSiamo">Caption Four</div>
   </div>

   <div class="singleImage">
    <div class="numbertext">5 / 5</div>
    <img src="immagini/galleria/img5.jpg">
    <div class="textChiSiamo">Caption Five</div>
   </div>

   <a class="prev" onclick="plusSlides(-1)">❮</a>
   <a class="next" onclick="plusSlides(1)">❯</a>

  </div>
  <br>
  <div style="text-align:center;">
   <span class="dot active" onclick="currentSlide(1)"></span>
   <span class="dot" onclick="currentSlide(2)"></span>
   <span class="dot" onclick="currentSlide(3)"></span>
   <span class="dot" onclick="currentSlide(4)"></span>
   <span class="dot" onclick="currentSlide(5)"></span>
  </div>

   <section class="sectionTestoChiSiamo">
    <h3>
     La nostra associazione
    </h3>
    <p>
     L'associazione Tum4World è un associazione di volontariato operante nei paesi più poveri dell'Africa centrale. Particolare
     interesse di azione sono le zone più povere di Burundi, Somalia, Mozambico, Madagascar, Sierra Leone, Repubblica Centrafricana, Liberia, Niger.
    </p>
   </section>

  <section class="sectionTestoChiSiamo">
   <h3>
    La nostra storia
   </h3>
   <p>
    Tum4World è stata fondata il sei maggio 2005, dall'idea di 4 studenti universitari trentini.
    Fin da subito attivi nell'interesse di aiutare la comunità trentina, hanno colto la possibilità di iniziare un'attività no profit molto più ampia.

    Il loro obiettivo era fin da subito dare sostegno alle persone più in difficoltà del continente africano.

    A partire dal 2005 ha avuto sempre più successo, soprattutto nel territorio trentino, trovando nuovi aderenti e simpatizzanti dell'associazione.
    L'espansione è stata capillare sul territorio fino ad arrivare al giorno d'oggi ad avere più di 1000 aderenti e 5000 simpatizzanti.   </p>
  </section>

  <section class="sectionTestoChiSiamo">
   <h3>
    Le nostre sedi
   </h3>
   <p>

    L'associazione vanta 3 sedi sul territorio trentino. La sede più importante è a Trento in via Rosmini 10. In questa sede avvengono anche i convegni e le riunioni dei membri più importanti.
    Una sede operativa si trova invece a Povo, in via Sommarive. Nei pressi dell'università di Trento ci sono locali adibiti all'organizzazione delle spedizioni sul territorio.
    Infine è presente un'ulteriore sede a Rovereto.

    Sul territorio nazionale è anche presente una sede nella capitale, a Roma, per coordinare l'operato con altre associazioni di volontariato italiane.

    Stiamo attualmente lavorando alla costruzione di una sede a Gitega, in Burundi, e a Freetown, in Sierra Leone, per permettere ai volontari sul territorio di avere una base sicura.
  </section>

  <section>
   <h3>
    I nostri riconoscimenti
   </h3>
   <p>
    Durante il corso degli anni la nostra associazioni ha ricevuto diversi riconoscimenti nazionali e internazionali che testimoniano il forte impegno che l'associazione e i suoi membri mettono nel loro lavoro.
    Nel 2018 ha anche ricevuto un finanziamento di 50 mila euro dalla provincia autonoma di Trento e di Bolzano per un progetto umanitario in Liberia.
  </section>

 </div>

 </main>

<jsp:include page="footer.jsp"></jsp:include>