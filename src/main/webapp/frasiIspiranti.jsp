<%@ page import="unitn.disi.web.progettoteam19.Counter" %>
<!-- Ho messo la frase dentro al Bean -->

<div class="frasiInspiranti">
<%--    <jsp:useBean id="fraseTMP" class="unitn.disi.web.progettoteam19.frase.BeanFrase" scope="session"/>--%>
<%--    <i id="fi">  <jsp:getProperty name="fraseTMP" property="fraseIsipirante" /> </i>--%>
    <i id="fraseInMostra"></i>
</div>

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
    setInterval(cambiaFrase, 20000);
</script>

