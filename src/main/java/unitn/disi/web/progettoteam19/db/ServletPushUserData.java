package unitn.disi.web.progettoteam19.db;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.sql.*;
import javax.servlet.annotation.*;


/**
 * Questa servlet viene usata per aggiungere al DB un nuovo utente durante il sign-in<br>
 * essa prende le informazioni dalla request e le inserisce nella tabella users nel DB.
 */
@WebServlet(name = "ServletPushUserData", value = "/ServletPushUserData")
public class ServletPushUserData extends HttpServlet {

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

    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String stringaInsert = "INSERT INTO USERS VALUES(?, ?, ?, ?, ?, ?, ?, ?)";

        try{
            PreparedStatement inserimento = connection.prepareStatement(stringaInsert);
            inserimento.setString(1, request.getParameter("nome"));
            inserimento.setString(2, request.getParameter("cognome"));
            inserimento.setString(3, request.getParameter("datadinascita"));
            inserimento.setString(4, request.getParameter("email"));
            inserimento.setString(5, request.getParameter("telefono"));
            inserimento.setString(6, request.getParameter("comboBox"));
            inserimento.setString(7, request.getParameter("username"));
            inserimento.setString(8, request.getParameter("passwordVal"));

            inserimento.executeUpdate();

            inserimento.close();

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
