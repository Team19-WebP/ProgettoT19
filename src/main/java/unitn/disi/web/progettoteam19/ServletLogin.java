package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.Objects;

@WebServlet(name = "ServletLogin", value = "/ServletLogin")
public class ServletLogin extends HttpServlet {
    Utente utente;

    protected Utente database(String username){
        Utente u = new Utente();
        //TODO accedo ala DB e prendo l'utente di nome username
        return u;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String username = (String) request.getAttribute("username");


        utente = database(username);
        //TODO fare i controlli da backend tipo che esista account e che password sia quella giusta

        //TODO prendere dati utente dal DB

        //TODO cambiare intestazione con intestazioneLoggato (forse non ha senso copiare il codice in ogni servlet ma chiamare una servlet chiamata tipo servlet sessione che gestisce quello e poi richiama questa)

        if(Objects.equals(utente.permesso, "aderente")){
            response.sendRedirect("./aderente.jsp");
        } else if (Objects.equals(utente.permesso, "simpatizzante")) {
            response.sendRedirect("./simpatizzante.jsp");
        }else if (Objects.equals(utente.permesso, "amministratore")) {
            response.sendRedirect("./amministratore.jsp");
        }else response.sendRedirect("./error.jsp");
    }
}
