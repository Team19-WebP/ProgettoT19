package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ServletLogin", value = "/ServletLogin")
public class ServletLogin extends HttpServlet {

    boolean aderente = false;
    boolean simpatizzante = false;
    boolean amministratore = false;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //TODO fare i controlli da backend tipo che esista account e che password sia quella giusta

        //TODO prendere dati utente dal DB


        if(aderente){
            response.sendRedirect("./aderente.jsp");
        } else if (simpatizzante) {
            response.sendRedirect("./simpatizzante.jsp");

        }else if (amministratore) {
            response.sendRedirect("./amministratore.jsp");

        }else error();

    }

    protected void  error(){
        //TODO reindirizzare ad una pagina di errore??
    }
}
