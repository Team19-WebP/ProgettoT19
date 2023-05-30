package unitn.disi.web.progettoteam19;

import unitn.disi.web.progettoteam19.db.AccessoDB;
import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "ServletLogin", value = "/ServletLogin")
public class ServletLogin extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        AccessoDB accessoDB = new AccessoDB();
        if(accessoDB.getUserName(username) == null){
            System.out.println("scemo username non esiste");
        }
        String pwFromDB = accessoDB.getPassword(username);
        if(pwFromDB != null && !pwFromDB.equals(password)){
            System.out.println("scemo pw sbagliata");
        }
        String tipologia = accessoDB.getTipologia(username);
        if(tipologia == null){
            System.out.println("problema inaspettato");
        }

        //TODO fare i controlli da backend tipo che esista account e che password sia quella giusta

        //TODO aggiungere ad un BEAN o alla sessione TUTTI i dati dell'utente tranne la password
        boolean aderente = false, simpatizzante = false, amministratore = false;

        if(username.equals("aderente")){
            aderente = true;
        } else if(username.equals("simpatizzante")) {
            simpatizzante = true;
        } else if(username.equals("admin") && password.equals("19Adm1n!")){
            amministratore = true;
        }

        HttpSession session = request.getSession(true);
        session.setAttribute("auth", "true");
        //session.setAttribute("infoUtente", new User());
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
