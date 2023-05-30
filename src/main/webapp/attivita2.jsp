<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:include page="frasiIspiranti.jsp"></jsp:include>
<jsp:useBean id="counterAttivita2" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterAttivita2" property="hits" value="0"/>
<main>
    <h3>Hits della pagina: <jsp:getProperty name="counterAttivita2" property="hits"/></h3>    <div class="containerAttivita">
    <div class="containerAttivita">
        <img src="immagini/attivita/img2.jpg" alt="Immagine di Team4World" style="width: 100%;">
        <div class="testoImmagine">
            <div style="padding: 20px">
                <h1>Team4World</h1>
                <h3>Come il lavoro di squadra può consentire la realizzazione dei propri sogni</h3>
            </div>
        </div>
    </div>
    <div class="containerAttivita containerDescrizione">
        <h3>In cosa consiste?</h3>
        <p>
            Il progetto Team4World ha l'obbiettivo di offrire oppurtunità e sostegno ai giovani. A tale scopo, uno dei programmi principali è l'organizzazione di settimane di incontri ricreativi per promuovere la collaborazione e insegnare l'importanza del lavoro di squadra.
        </p>
        <p>
            Durante queste settimane, i ragazzi provenienti dalle comunità locali vengono invitati a partecipare a una serie di attività di team building. I giovani vengono suddivisi in squadre e vengono proposte loro delle sfide che richiedono un forte spirito di cooperazione per essere superate. Attraverso queste attività, i giovani imparano  a mettersi in gioco, condividere idee e raggiungere insieme l'obbiettivo prefissato.
        </p>
        <p>
            In aggiunta, vengono organizzati incontri con personaggi di successo che con impegno e costanza sono riusciti a realizzare i propri sogni. Questi ospiti portano le loro esperienze professionali e personali, incoraggiando i ragazzi a credere in se stessi e nelle proprie capacità.<br>Nel 2019, in Somalia, abbiamo avuto l'onore di ospitare il professor Federico Lo Voce, brillante docente di Informatica che in breve è riuscito a portare la sua piccola azienda al successo. Raccontava: "Ho iniziato nel garage di casa, insieme a un gruppo di amici, e insieme, rispettosi l'uno dell'altro, siamo giunti dove siamo ora".
        </p>
        <p>
            Oltre a sottolineare l'importante valore del lavoro di squadra, il progetto Team4World si preoccupa di offrire ai giovani anche un ambiente di supporto e solidarietà. Molti ragazzi provengono da contesti socioeconomici ed educativi svantaggiati; Team4world vuole rappresentare un bagliore di speranza per questi giovani, spingendoli a non gettare mai la spugna e perseguire i propri sogni.
        </p>
    </div>
</main>

<jsp:include page="footer.jsp"></jsp:include>