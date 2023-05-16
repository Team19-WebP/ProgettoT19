package unitn.disi.web.progettoteam19;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.NumberFormat;
import java.text.ParseException;
import javax.servlet.annotation.*;

@WebServlet(name = "Home", value = "/Home")
public class Home extends HttpServlet {

    //Idealmente così per tutte le pagine! Questa roba possiamo farla coi filtri
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(false);
        if(session == null || session.getAttribute("auth").equals("false")){
            //inserisci intestazione.jsp
        } else {
            //inserisci intestazioneLoggato.jsp
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process_request(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process_request(request, response);
    }
}
