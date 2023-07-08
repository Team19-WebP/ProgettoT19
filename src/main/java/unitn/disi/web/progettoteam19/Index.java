package unitn.disi.web.progettoteam19;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
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
     * Impostiamo come variabili d'istanza i vari contatori che salveremo nel ServletContext.
     */

    private Counter counterGenerale;
    private Counter counterHome;
    private Counter counterAmministratore;
    private Counter counterAttivita;
    private Counter counterAttivita1;
    private Counter counterAttivita2;
    private Counter counterAttivita3;
    private Counter counterConfermasignin;
    private Counter counterContatti;
    private Counter counterInvioConfermato;
    private Counter counterLogin;
    private Counter counterChisiamo;
    private Counter counterLogout;
    private Counter counterSignin;
    private Counter counterAderente;
    private Counter counterSimpatizzante;

    /**
     * Inizializza i valori dei vari contatori, con quelli salvati nel database. <br>
     * @throws ServletException
     */
    @Override
    public void init() throws ServletException {
        openConnection();
        counterGenerale = new Counter(getValue("generale"), "generale");
        counterHome = new Counter(getValue("Home"), "Home");
        counterAmministratore = new Counter(getValue("Amministratore"), "Amministratore");
        counterAttivita = new Counter(getValue("Attivita"), "Attivita");
        counterAttivita1 = new Counter(getValue("Aisha"), "Aisha");
        counterAttivita2 = new Counter(getValue("Attivita2"), "Attivita2");
        counterAttivita3 = new Counter(getValue("Attivita3"), "Attivita3");
        counterConfermasignin = new Counter(getValue("Conferma Sign-in"), "Conferma Sign-in");
        counterContatti = new Counter(getValue("Contatti"), "Contatti");
        counterInvioConfermato = new Counter(getValue("Conferma Contatti"), "Conferma Contatti");
        counterLogin = new Counter(getValue("Login"), "Login");
        counterChisiamo = new Counter(getValue("Chi Siamo"), "Chi Siamo");
        counterLogout = new Counter(getValue("Logout"), "Logout");
        counterSignin = new Counter(getValue("Sign-in"), "Sign-in");
        counterAderente = new Counter(getValue("Aderente"), "Aderente");
        counterSimpatizzante = new Counter(getValue("Simpatizzante"), "Simpatizzante");
        closeConnection();
    }

    /**
     * Salva i valori dei vari contatori nel database.
     */
    @Override
    public void destroy() {
        openConnection();
        setValue("generale", counterGenerale.getHits());
        setValue("home", counterHome.getHits());
        setValue("attivita", counterAttivita.getHits());
        setValue("attivita1", counterAttivita1.getHits());
        setValue("attivita2", counterAttivita2.getHits());
        setValue("attivita3", counterAttivita3.getHits());
        setValue("admin", counterAmministratore.getHits());
        setValue("contatti", counterContatti.getHits());
        setValue("confinvio", counterInvioConfermato.getHits());
        setValue("login", counterLogin.getHits());
        setValue("chisiamo", counterChisiamo.getHits());
        setValue("logout", counterLogout.getHits());
        setValue("signin", counterSignin.getHits());
        setValue("aderente", counterAderente.getHits());
        setValue("simpatizzante", counterSimpatizzante.getHits());
        closeConnection();
    }

    private void setValue(String page, int val){
        String update = "UPDATE Contatori SET Valore = ? WHERE Pagina = ?";
        PreparedStatement preparedStatement;

        try {
            preparedStatement = connection.prepareStatement(update);
            preparedStatement.setInt(1, val);
            preparedStatement.setString(2, page);
            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch(SQLException ex){
            ex.printStackTrace();
        }

    }

    /**
     * Funzione usata per fare la query al database e ottenere il valore di un contatore.
     * @param page pagina di cui si recupera il contatore
     * @return valore del contatore riferito alla tale pagina. Ritorna un valore >= 0. <br>
     * In caso di qualsiasi problema torna 0.
     */
    private int getValue(String page){
        String query = "SELECT Valore FROM Contatori WHERE Pagina = ?";
        ResultSet rs;
        PreparedStatement preparedStatement;
        try {
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, page);
            rs = preparedStatement.executeQuery();
            int retval = 0;
            if(rs.next()){
                retval  = rs.getInt(1);
            }
            rs.close();
            preparedStatement.close();
            return retval;
        } catch (SQLException ex){
            ex.printStackTrace();
        }
        return 0;
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
        servletContext.setAttribute("counterGenerale", counterGenerale);
        servletContext.setAttribute("counterHome", counterHome);
        servletContext.setAttribute("counterAmministratore", counterAmministratore);
        servletContext.setAttribute("counterAttivita", counterAttivita);
        servletContext.setAttribute("counterAttivita1", counterAttivita1);
        servletContext.setAttribute("counterAttivita2", counterAttivita2);
        servletContext.setAttribute("counterAttivita3", counterAttivita3);
        servletContext.setAttribute("counterConfermasignin", counterConfermasignin);
        servletContext.setAttribute("counterContatti", counterContatti);
        servletContext.setAttribute("counterInvioConfermato", counterInvioConfermato);
        servletContext.setAttribute("counterLogin", counterLogin);
        servletContext.setAttribute("counterChisiamo", counterChisiamo);
        servletContext.setAttribute("counterLogout", counterLogout);
        servletContext.setAttribute("counterSignin", counterSignin);
        servletContext.setAttribute("counterAderente", counterAderente);
        servletContext.setAttribute("counterSimpatizzante", counterSimpatizzante);
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
