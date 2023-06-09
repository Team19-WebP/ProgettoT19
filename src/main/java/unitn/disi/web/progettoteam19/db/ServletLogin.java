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

@WebServlet(name = "ServletLogin", value = "/ServletLogin")
public class ServletLogin extends HttpServlet {

    private String dbURL = "jdbc:derby://localhost:1527/Team19DB";
    private String user = "APP";
    private String password = "admin";
    private Connection connection = null;

    @Override
    public void init() throws ServletException {
        try{
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            connection = DriverManager.getConnection(dbURL, user, password);
        } catch (ClassNotFoundException | SQLException ex){
            ex.printStackTrace();
        }
    }

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
            System.out.println("scemo username non esiste");
            //TODO IN QUESTI CASI REINDIRIZZARE SU STESSA PAGINA DI LOGIN
            response.sendRedirect("error.jsp");
            return;
        }
        String pwFromDB = getPassword(username);
        if(pwFromDB != null && !pwFromDB.equals(password)){
            System.out.println("scemo pw sbagliata");
            response.sendRedirect("error.jsp");
            return;
        }
        String tipologia = getTipologia(username);
        if(tipologia == null){
            System.out.println("problema inaspettato");
            response.sendRedirect("error.jsp");
            return;
        }

        boolean aderente = false, simpatizzante = false, amministratore = false;

        if(tipologia.equals("aderente")){
            aderente = true;
        } else if(tipologia.equals("simpatizzante")) {
            simpatizzante = true;
        } else if(tipologia.equals("amministratore")){
            amministratore = true;
        }

        HttpSession session = request.getSession(true);


        request.getRequestDispatcher(response.encodeURL("ServletGetUser")).include(request, response);
        System.out.println( (User) session.getAttribute("utenteLoggato"));
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
