<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java"%>
<div id="boxInformativaCookies" class="informativaCookies">

    <div class="infoCookies" class="containerDescrizione">
        <h1>Utilizzo dei cookies!</h1>
        <p><strong>Tum4World</strong> utilizza cookies tecnici per migliorare la tua esperienza di navigazione.
            I cookies che noi utilizziamo sono di tipo tecnico e hanno lo scopo di personalizzare l'interfaccia e mantenere dati statistici sull'utilizzo del sito web.</p>
        <br>
        <p>
            Non utilizziamo cookie per scopi pubblicitari o per tracciare il tuo comportamento al di fuori del nostro sito.
            Se decidessi di rifiutare i cookies alcune funzionalità potrebbero cessare di funzionare.

        </p>
        <p id="firma"> Buona navigazione dal team di Tum4World!</p>
        <button class="buttonCookies" id="accetta" onclick="preferenzaCookies('<%=response.encodeURL("/progettoteam19/ServletCookies")%>', 'true')">Accetta</button>
        <button class="buttonCookies" id="rifiuta" onclick="preferenzaCookies('<%=response.encodeURL("/progettoteam19/ServletCookies")%>', 'false')">Rifiuta</button>
    </div>

</div>
<script src="scripts/cookies.js"></script>
<%-- Anche per le richieste fatte con AJAX bisogna usare encodeUrl nel caso i cookies siano disabilitati --%>
<script>
    controllaPreferenza('<%=response.encodeURL("/progettoteam19/ServletCookies")%>');
</script>