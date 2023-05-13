<!-- Ho messo la frase dentro al Bean -->

<div class="frasiInspiranti">
    <jsp:useBean id="myBean1" class="unitn.disi.web.progettoteam19.frase.BeanFrase" scope="session"/>
    <i id="fi">  <jsp:getProperty name="myBean1" property="fraseIsipirante" /> </i>
</div>


