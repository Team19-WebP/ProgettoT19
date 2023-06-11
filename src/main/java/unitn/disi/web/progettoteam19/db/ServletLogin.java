package unitn.disi.web.progettoteam19.db;

import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.*;


/**
 * Servlet che gestisce il login, controlla che le credenziali siano corrette tramite il DB<br>
 * e in caso di successo reindirizza alla pagina privata corrispondente alla tipologia di utente.
 */
@WebServlet(name = "ServletLogin", value = "/ServletLogin")
public class ServletLogin extends HttpServlet {

    private final String dbURL = "jdbc:derby://localhost:1527/Team19DB";
    private final String user = "APP";
    private final String password = "admin";
    private Connection connection = null;

    /**
     * Quando la servlet viene creata creo una connessione con il DB
     */
    @Override
    public void init() throws ServletException {
        try{
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            connection = DriverManager.getConnection(dbURL, user, password);
        } catch (ClassNotFoundException | SQLException ex){
            ex.printStackTrace();
        }
    }
    /**
     * Chiudo la connessione prima di distruggere la servlet
     */
    @Override
    public void destroy() {
        try {
            connection.close();
        } catch (SQLException ex){
            ex.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if(getUserName(username) == null){
            response.sendRedirect(response.encodeURL("login.jsp?errore=true")); //reindirizza al login notificando l'utente dell'errore
            return;
        }
        String pwFromDB = getPassword(username);
        if(pwFromDB != null && !pwFromDB.equals(password)){
            response.sendRedirect(response.encodeURL("login.jsp?errore=true")); //reindirizza al login notificando l'utente dell'errore
            return;
        }
        String tipologia = getTipologia(username);
        if(tipologia == null){
            response.sendRedirect(response.encodeURL("error.jsp")); //reindirizza a una pagina di errore (non dovrebbe mai accadere)
            return;
        }

        boolean aderente = false, simpatizzante = false, amministratore = false;

        switch (tipologia) {
            case "aderente":
                aderente = true;
                break;
            case "simpatizzante":
                simpatizzante = true;
                break;
            case "amministratore":
                amministratore = true;
                break;
        }

        HttpSession session = request.getSession(true);

        request.getRequestDispatcher(response.encodeURL("ServletGetUser")).include(request, response);
        if(aderente){
            session.setAttribute("type", "aderente");
            response.sendRedirect(response.encodeRedirectURL("aderente.jsp"));
        } else if (simpatizzante) {
            session.setAttribute("type", "simpatizzante");
            response.sendRedirect(response.encodeRedirectURL("simpatizzante.jsp"));
        }else if (amministratore) {
            session.setAttribute("type", "amministratore");
            response.sendRedirect(response.encodeRedirectURL("amministratore.jsp"));
        }else {
            response.sendRedirect(response.encodeRedirectURL("error.jsp"));
        }
    }


    //usato per evitare duplicazioni nei metodi seguenti
    private String getString(String usernameToCheck, String stringaGet) {
        try{
            PreparedStatement inserimento = connection.prepareStatement(stringaGet);
            inserimento.setString(1, usernameToCheck);
            ResultSet rs = inserimento.executeQuery();

            if(rs.next()){
                String val = rs.getString(1);
                rs.close();
                inserimento.close();
                return val;
            } else {
                inserimento.close();
                rs.close();
                return null;
            }

        } catch (SQLException ex){
            ex.printStackTrace();
            return null;
        }
    }
    public String getUserName(String usernameToCheck){
        String stringaGet = "SELECT USERNAME FROM USERS WHERE USERNAME = ?";

        String retval = getString(usernameToCheck, stringaGet);
        return retval;
    }
    public String getPassword(String usernameToCheck){
        String stringaGet = "SELECT PASSWORD FROM USERS WHERE USERNAME = ?";

        String retval = getString(usernameToCheck, stringaGet);
        return retval;
    }
    public String getTipologia(String usernameToCheck){
        String stringaGet = "SELECT TIPOLOGIA FROM USERS WHERE USERNAME = ?";

        String retval = getString(usernameToCheck, stringaGet);
        return retval;
    }
}
