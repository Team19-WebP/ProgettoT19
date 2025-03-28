package unitn.disi.web.progettoteam19.db;

import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.text.NumberFormat;
import java.text.ParseException;
import java.util.ArrayList;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletPartecipaAttivita", value = "/ServletPartecipaAttivita")
public class ServletPartecipaAttivita extends HttpServlet {

    private final String dbURL = "jdbc:derby://localhost:1527/Team19DB;";
    private final String user = "APP";
    private final String password = "admin";
    private Connection connection = null;

    /**
     * Quando la servlet viene creata creo una connessione con il DB.
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
     * Chiudo la connessione prima di distruggere la servlet.
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
     * Aggiunge alla tabella iscrizione nel database l'utente che si è iscritto alle attivita corrette.
     */
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        boolean partecipazione1 = request.getParameter("attivita1") != null && request.getParameter("attivita1").equals("1");
        boolean partecipazione2 = request.getParameter("attivita2") != null && request.getParameter("attivita2").equals("2");
        boolean partecipazione3 = request.getParameter("attivita3") != null && request.getParameter("attivita3").equals("3");


        try{
            String stringaGet = "SELECT * FROM ISCRIZIONI WHERE USERNAME = ? AND Attivita = ?";
            PreparedStatement getting = connection.prepareStatement(stringaGet);
            HttpSession session = request.getSession(false);
            if(session == null){
                return;
            }
            User u = (User) session.getAttribute("utenteLoggato");
            getting.setString(1, u.getUsername());
            getting.setInt(2, 1);
            ResultSet resultSet = getting.executeQuery();

            String stringaInsert = "INSERT INTO ISCRIZIONI VALUES(?, ?)";
            PreparedStatement inserting = connection.prepareStatement(stringaInsert);
            inserting.setString(1, u.getUsername());
            if(!resultSet.next() && partecipazione1){
                inserting.setInt(2, 1);
                inserting.executeUpdate();
            }

            getting.setInt(2, 2);
            resultSet = getting.executeQuery();
            if(!resultSet.next() && partecipazione2){
                inserting.setInt(2, 2);
                inserting.executeUpdate();
            }

            getting.setInt(2, 3);
            resultSet = getting.executeQuery();
            if(!resultSet.next() && partecipazione3){
                inserting.setInt(2, 3);
                inserting.executeUpdate();
            }

            getting.close();
            resultSet.close();
            inserting.close();

            response.sendRedirect(response.encodeURL("./confermaPartecipazione.jsp"));//reindirizza a una pagina che notifica l'utente dell'avvenuta iscrizione
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
