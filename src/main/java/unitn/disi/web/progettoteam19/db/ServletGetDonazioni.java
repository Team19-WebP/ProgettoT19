package unitn.disi.web.progettoteam19.db;

import unitn.disi.web.progettoteam19.model.Donazione;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneId;
import java.util.ArrayList;
import javax.servlet.annotation.*;
import java.util.Date;

import com.google.gson.Gson;
import com.google.gson.JsonArray;

/**
 * Questa servlet viene usata per fornire i dati al grafico delle donazioni visualizzabile dall'amministratore <br>
 * essa prende le informazioni dal database e le inserisce in file JSON i quali vengono inseriti nella response.
 */
@WebServlet(name = "ServletGetDonazioni", value = "/ServletGetDonazioni")
public class ServletGetDonazioni extends HttpServlet {

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
     * Visto che il grafico mostra solo le donazioni dell'anno corrente qui viene fatta una query SQL che richieda solo queste al DB.<br>
     * Poi inserisce ogni riga del result set in un file JSON e li inserisce tutti nella response.
     */
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String query = "SELECT IMPORTO, DATADONAZIONE FROM DONAZIONI WHERE DATADONAZIONE >= ? AND DATADONAZIONE <= ?";
        ArrayList<Donazione> lastYearDonations = new ArrayList<>();

        Date dataAttuale = new Date();
        String pattern = "YYYY-MM-dd"; //questo è il format della data nel DB
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

        LocalDate localDate = dataAttuale.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        localDate = LocalDate.of( localDate.getYear() , Month.JANUARY , 1 );

        try {
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, localDate.toString());
            preparedStatement.setString(2, simpleDateFormat.format(dataAttuale));
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()){
                Donazione donation = new Donazione();
                donation.setImporto(resultSet.getDouble(1));
                java.sql.Date data = resultSet.getDate(2);
                LocalDate ld = data.toLocalDate();
                donation.setDataDonazione(ld);
                lastYearDonations.add(donation);
            }

            // Preparing and sending json response
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            try (PrintWriter out = response.getWriter()) {
                JsonArray array = new JsonArray();
                for(Donazione d : lastYearDonations) {
                    Gson gson = new Gson();
                    array.add(gson.toJson(d));
                }
                out.println(array);
                out.flush();
            }
            catch (IOException ex) {
                ex.printStackTrace();
                response.sendRedirect(response.encodeURL("error.html"));
            }

            resultSet.close();
            preparedStatement.close();
        } catch (SQLException ex) {
                ex.printStackTrace();
                response.sendRedirect(response.encodeURL("error.html"));
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
