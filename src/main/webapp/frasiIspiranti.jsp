<%@ page import="unitn.disi.web.progettoteam19.Counter" %>
<!-- Ho messo la frase dentro al Bean -->

<%
    Counter counter = (Counter) application.getAttribute("counter");
    if(counter == null) {
        counter = new Counter();
        application.setAttribute("counter", counter);
    }
        counter.addHit();
%>

<div class="frasiInspiranti">
<%--    <jsp:useBean id="fraseTMP" class="unitn.disi.web.progettoteam19.frase.BeanFrase" scope="session"/>--%>
<%--    <i id="fi">  <jsp:getProperty name="fraseTMP" property="fraseIsipirante" /> </i>--%>
    <i id="fraseInMostra"></i>
    <i><%= counter %></i>
</div>


<style>
    #fraseInMostra {
        box-sizing: border-box;
    }
    .fade-in {
        opacity: 1;
        transition: opacity 1s ease-in-out;
    }

    .fade-out {
        opacity: 0;
        transition: opacity 1s ease-in-out
    }
    .frasiInspiranti {

        /* Misure calcolate con il browser nellla sezione computed! */
        position: fixed;

        /* Scommentare qua sotto per metterlo a sinistra */
        /*max-width: 250px;*/
        /* Scommentare qua sopra per metterlo a sinistra */

        /* Commentare la riga sotto per metterlo a sinistra*/
        width: 100%;
        /* Commentare la riga sopra per metterlo a sinistra*/
        top: 132px;
        left: 0;
        padding: 1%;
        /* Scommentare se vogliamo le frasi ispiranti in centro */
        /*left: 50%;*/
        /*transform: translate(-50%);*/
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Darumadrop One', cursive;
        /*background: linear-gradient(to bottom, #31372b, transparent);*/
        background-color: #31372BFF;
        text-align: center;
        color: #FFB3BF;
        height: 50px;
        z-index: 9998;
    }
    @media screen and (max-width: 538px) {
        .frasiInspiranti {
            top: 175px;
            height: 60px;
        }
        .frasiInspiranti i {
            vertical-align: central;
        }
    }

</style>
<script>
    function cambiaFrase() {
        let fraseInMostra = document.getElementById("fraseInMostra");
        fraseInMostra.classList.add("fade-out");

        setTimeout(function () {

            let xht = new XMLHttpRequest();
            xht.onreadystatechange = function()  {
                if(this.readyState == 4 && this.status == 200) {
                    fraseInMostra.innerText = this.responseText;

                    fraseInMostra.classList.remove("fade-out");
                    fraseInMostra.classList.add("fade-in");
                }
            }
            xht.open("GET", "/progettoteam19/frasiServlet", true);
            xht.send();
        }, 1000);
    }
    cambiaFrase();
    setInterval(cambiaFrase, 5000);
</script>

