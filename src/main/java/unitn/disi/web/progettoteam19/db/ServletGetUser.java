package unitn.disi.web.progettoteam19.db;

import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.sql.*;
import javax.servlet.annotation.*;

/**
 * Questa servlet viene usata per popolare la tabella nelle pagine privata di Aderenti e Simpatizzanti <br>
 * essa prende le informazioni dal database e le inserisce in un BEAN contenente tutti i dati dell'utente loggato.
 */
@WebServlet(name = "ServletGetUser", value = "/ServletGetUser")
public class ServletGetUser extends HttpServlet {

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
    /**
     * Prende dal DB tutte le informazioni dell'utente con username specificato nella request.
     * Poi inserisce tutte queste informazioni in un BEAN di tipo User chiamato utenteLoggato.
     */
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String stringaGet = "SELECT * FROM Users WHERE USERNAME = ?";

        try{
            PreparedStatement getting = connection.prepareStatement(stringaGet);
            getting.setString(1, request.getParameter("username"));
            ResultSet resultSet = getting.executeQuery();

            User utenteLoggato = new User();

            if (resultSet.next()){
                utenteLoggato.setNome(resultSet.getString(1));
                utenteLoggato.setCognome(resultSet.getString(2));
                utenteLoggato.setDatadinascita(Date.valueOf(resultSet.getString(3)));
                utenteLoggato.setEmail(resultSet.getString(4));
                utenteLoggato.setCellulare(resultSet.getString(5));
                utenteLoggato.setTipologia(resultSet.getString(6));
                utenteLoggato.setUsername(resultSet.getString(7));
            } else {
                utenteLoggato = null;
            }

            request.getSession().setAttribute("utenteLoggato", utenteLoggato);

            getting.close();
            resultSet.close();
        } catch (SQLException ex){
            ex.printStackTrace();
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
