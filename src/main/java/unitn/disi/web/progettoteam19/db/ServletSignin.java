package unitn.disi.web.progettoteam19.db;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.*;

/**
 * Questa servlet controlla che non sia gia presente un utente con lo <b>username</b> specificato in fase di sign-in.
 */
@WebServlet(name = "ServletSignin", value = "/ServletSignin")
public class ServletSignin extends HttpServlet {

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

    public String getUserName(String usernameToCheck){
        String stringaGet = "SELECT USERNAME FROM USERS WHERE USERNAME = ?";

        try{
            PreparedStatement inserimento = connection.prepareStatement(stringaGet);
            inserimento.setString(1, usernameToCheck);
            ResultSet rs = inserimento.executeQuery();

            if(rs.next()){
                String val = rs.getString(1);
                inserimento.close();
                rs.close();
                return val;
            } else {
                inserimento.close();
                return null;
            }

        } catch (SQLException ex){
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(getUserName(request.getParameter("username")) != null){
            response.sendRedirect(response.encodeURL("signin.jsp?errore=true")); //reindirizzo alla pagina sign-in notificando l'errore all'utente
        } else {
            request.getRequestDispatcher(response.encodeURL("/ServletPushUserData")).include(request, response); //salvo i dati nel DB prima di confermare l'iscrizione
            response.sendRedirect(response.encodeURL("confermaSignin.jsp"));
        }
    }
}
