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

        String username = request.getParameter("username");

        //TODO fare i controlli da backend tipo che esista account e che password sia quella giusta

        //TODO prendere dati utente dal DB

        //TODO cambiare intestazione con intestazioneLoggato (forse non ha senso copiare il codice in ogni servlet ma chiamare una servlet chiamata tipo servlet sessione che gestisce quello e poi richiama questa)

        boolean aderente = false, simpatizzante = false, amministratore = false;


        if(username.equals("aderente")){
            aderente = true;
        } else if(username.equals("simpatizzante")) {
            simpatizzante = true;
        } else {
            amministratore = true;
        }

        HttpSession session = request.getSession(true);
        session.setAttribute("auth", "true");
        if(aderente){
            session.setAttribute("type", "aderente");
            response.sendRedirect(response.encodeURL("./aderente.jsp"));
        } else if (simpatizzante) {
            session.setAttribute("type", "simpatizzante");
            response.sendRedirect(response.encodeURL("./simpatizzante.jsp"));
        }else if (amministratore) {
            session.setAttribute("type", "amministratore");
            response.sendRedirect(response.encodeURL("./amministratore.jsp"));
        }else {
            response.sendRedirect(response.encodeURL("./error.jsp"));
        }

    }
}
