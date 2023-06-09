<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<jsp:include page="intestazione.jsp"></jsp:include>
<jsp:include page="frasiIspiranti.jsp"></jsp:include>
<jsp:useBean id="counterAisha" class="unitn.disi.web.progettoteam19.Counter" scope="application"/>
<jsp:setProperty name="counterAisha" property="hits" value="0"/>
<main>
    <div class="containerAttivita">
        <img src="immagini/attivita/img1.jpg" alt="Immagine di Aisha"> <%--style="width: 100%; max-width: 800px"--%>
        <div class="testoImmagine">
            <h1>Aisha</h1>
            <h3>Combattiamo insieme la malnutrizione per un mondo migliore</h3>
        </div>
    </div>
    <div class="containerAttivita containerDescrizione">
        <h3>In cosa consiste?</h3>
        <p>
            L'associazione Tum4World si impegna principalmente a fornire cibo e acqua potabile ai paesi più poveri dell'Africa. Gli sforzi si concentrano su diverse aree, tra cui Burundi, Somalia, Mozambico, Madagascar, Sierra Leone, Repubblica Centrafricana, Liberia e Niger.
        </p>
        <p>
            I viveri vengono acquistati da agricoltori e produttori locali, in modo da incentivare l’economia autoctona e contribuire allo sviluppo della comunità. I volontari visitano regolarmente i villaggi settimanalmente o in caso di emergenze o carestie, fornendo ai capi villaggio le provviste necessarie.
        </p>
        <p>
            Questo progetto si chiama Aisha in ricordo della bambina liberiana che nel 2008 è morta a causa di una grave malnutrizione. Con il tuo prezioso aiuto, puoi contribuire a fornire cibo e acqua alle famiglie dei villaggi meno conosciuti e a volte dimenticati anche da altre organizzazioni di volontariato ed evitare così che altri bambini perdano la vita. Registrati ora come aderente o simpatizzante e unisciti a noi per rendere felici migliaia di bambini e famiglie che soffrono di malnutrizione.
        </p>
    </div>
</main>

<jsp:include page="footer.jsp"></jsp:include>