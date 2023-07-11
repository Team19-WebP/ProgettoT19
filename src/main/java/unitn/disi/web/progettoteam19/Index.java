package unitn.disi.web.progettoteam19;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import javax.servlet.annotation.*;

/**
 * Servlet che rappresenta l'<b>entry point</b> del nostro sito web. <br>
 * Dopo aver configurato alcune impostazioni iniziali, reindirizza alla homepage,
 */

@WebServlet(name = "Index", value = "/Index")
public class Index extends HttpServlet {
    /**
     * Variabili usate per inizializzare la connessione con il database. <br>
     * Questa connessione è necessaria per recuperare i valori dei contatori dal database.
     */

    final String dbURL = "jdbc:derby://localhost:1527/Team19DB";
    final String user = "APP";
    final String password = "admin";
    Connection connection = null;

    /**
     * Lista che conterrà tutti i contatori presenti nel DB se si aggiungesse <br>
     * un nuovo contatore per una pagina nuova bisogna inserire una voce nella <br>
     * tabella contatori INSERT INTO Contatori VALUES ('PaginaNuova', 0) e <br>
     * settare il bean nella paginanuova.jsp come counterPaginaNuova
     */
    private ArrayList<Counter> contatori;

    /**,
     * Inizializza i valori dei vari contatori, con quelli salvati nel database. <br>
     * @throws ServletException
     */
    @Override
    public void init() throws ServletException {
        contatori = new ArrayList<>();
        openConnection();
        getValues();
        closeConnection();
    }

    /**
     * Salva i valori dei vari contatori nel database.
     */
    @Override
    public void destroy() {
        openConnection();
        setValues();
        closeConnection();
    }

    /**
     * Funzione che cicla tutti i contatori dell'Arraylist contatori e <br>
     * li salva nel database.
     */
    private void setValues(){

        for (Counter c : contatori) {

            String update = "UPDATE Contatori SET Valore = ? WHERE Pagina = ?";
            PreparedStatement preparedStatement;

            try {
                preparedStatement = connection.prepareStatement(update);
                preparedStatement.setInt(1, c.getHits());
                preparedStatement.setString(2, c.getPage());
                preparedStatement.executeUpdate();
                preparedStatement.close();
            } catch(SQLException ex){
                ex.printStackTrace();
            }
        }

    }

    /**
     * Funzione che raccoglie dal database i valori di tutti contatori <br>
     * e li inserisce nell'Arraylist contatori
     */
    private void getValues(){

        String query = "SELECT * FROM Contatori";

        try{
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            while(rs.next()) {
                Counter contatore = new Counter();
                contatore.setPage(rs.getString("PAGINA"));
                contatore.manuallySetHits(rs.getInt("VALORE"));
                contatori.add(contatore);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * Apre una connessione con il database.
     */
    private void openConnection(){
        try{
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            connection = DriverManager.getConnection(dbURL, user, password);
        } catch (ClassNotFoundException | SQLException ex){
            ex.printStackTrace();
        }
    }

    /**
     * Chiude la connessione esistente con il database.
     */
    private void closeConnection(){
        try {
            connection.close();
        } catch (SQLException ex){
            ex.printStackTrace();
        }
    }

    /**
     * Aggiungiamo i vari contatori al ServletContext e reindirizziamo a <b>home.jsp</b>.
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = request.getServletContext();
        for(Counter c : contatori) {
            servletContext.setAttribute("counter" + c.getPage(), c);
        }
        response.sendRedirect(response.encodeRedirectURL("home.jsp"));
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
