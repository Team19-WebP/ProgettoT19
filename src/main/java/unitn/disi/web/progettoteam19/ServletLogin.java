package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.Objects;

@WebServlet(name = "ServletLogin", value = "/ServletLogin")
public class ServletLogin extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String username = (String) request.getAttribute("username");


        //TODO fare i controlli da backend tipo che esista account e che password sia quella giusta

        //TODO prendere dati utente dal DB

        //TODO cambiare intestazione con intestazioneLoggato (forse non ha senso copiare il codice in ogni servlet ma chiamare una servlet chiamata tipo servlet sessione che gestisce quello e poi richiama questa)

        boolean aderente = true, simpatizzante = true, amministratore = true;

        if(aderente){
            response.sendRedirect("./aderente.jsp");
        } else if (simpatizzante) {
            response.sendRedirect("./simpatizzante.jsp");
        }else if (amministratore) {
            response.sendRedirect("./amministratore.jsp");
        }else response.sendRedirect("./error.jsp");
    }
}
