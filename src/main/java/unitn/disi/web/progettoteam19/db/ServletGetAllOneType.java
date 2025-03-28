package unitn.disi.web.progettoteam19.db;

import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import javax.servlet.annotation.*;

import com.google.gson.Gson;
import com.google.gson.JsonArray;


/**
 * Questa servlet viene usata per popolare le tabelle di aderenti e simpatizzanti nella pagina dell'amministratore <br>
 * essa prende le informazioni dal database e le inserisce in file JSON i quali vengono inseriti nella response.
 */
@WebServlet(name = "ServletGetAllOneType", value = "/ServletGetAllOneType")
public class ServletGetAllOneType extends HttpServlet {
    private final String dbURL = "jdbc:derby://localhost:1527/Team19DB;";
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
     * Creo una query SQL e la invio al DB <br>
     * nella query inserisco <b>la tipologia</b> degli utenti che voglio visualizzare. <br><br>
     * Dopodiché inserisco ogni riga del result set in un file JSON e li aggiungo alla response.
     */
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String stringaGet = "SELECT * FROM Users WHERE TIPOLOGIA = '" + request.getParameter("tipologia").toLowerCase() + "'";

        ArrayList<User> allUserTipo = new ArrayList<>();

        try{
            Statement getting = connection.createStatement();
            ResultSet resultSet = getting.executeQuery(stringaGet);

            while (resultSet.next()){
                User utente = new User();
                utente.setNome(resultSet.getString(1));
                utente.setCognome(resultSet.getString(2));
                utente.setDatadinascita(Date.valueOf(resultSet.getString(3)));
                utente.setEmail(resultSet.getString(4));
                utente.setCellulare(resultSet.getString(5));
                utente.setTipologia(resultSet.getString(6));
                utente.setUsername(resultSet.getString(7));
                allUserTipo.add(utente);
            }

            // Preparing and sending json response
            response.setContentType("application/json");
            response.setCharacterEncoding("utf-8");
            try (PrintWriter out = response.getWriter()) {
                JsonArray array = new JsonArray();
                for(User c : allUserTipo) {
                    Gson gson = new Gson();
                    array.add(gson.toJson(c));
                }
                out.println(array);
                out.flush();
            }
            catch (IOException ex) {
                ex.printStackTrace();
                response.sendRedirect(response.encodeURL("error.html"));
            }


            resultSet.close();
            getting.close();

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
