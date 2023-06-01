package unitn.disi.web.progettoteam19;

import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.Random;

@WebServlet(name = "frasiServlet", value = "/frasiServlet")
public class frasiServlet extends HttpServlet {
    ArrayList<String> frasiIspiranti;

    @Override
    public void init() throws ServletException {
        String dbURL = "jdbc:derby://localhost:1527/Team19DB";
        String user = "APP";
        String password = "admin";
        Connection connection = null;
        try{
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            connection = DriverManager.getConnection(dbURL, user, password);
        } catch (ClassNotFoundException | SQLException ex){
            ex.printStackTrace();
        }

        System.out.println("Chiamata una sola volta");

        frasiIspiranti = new ArrayList<>();
        /* COMMENTATO PERCHè NON SO SE FUNZIONA
        try{
            Statement getting = connection.createStatement();
            ResultSet resultSet = getting.executeQuery("SELECT * FROM FRASI");


            while (resultSet.next()){
                frasiIspiranti.add(resultSet.getString(1));
            }

        } catch (SQLException ex){
            ex.printStackTrace();
        }*/
        frasiIspiranti.add("Se cerchi una mano che ti aiuti nel momento del bisogno, la trovi alla fine del tuo braccio.");
        frasiIspiranti.add("C\u0027è un solo tipo di successo: quello di fare della propria vita ciò che si desidera!");
        frasiIspiranti.add("Lascia che la curiosità ti travolga.");
        frasiIspiranti.add("Dimenticare aiuta, rimediare di più.");
        frasiIspiranti.add("Il tempo non è bravo a nascondersi, se lo cerchi lo trovi sempre.");

        try {
            connection.close();
        } catch (SQLException ex){
            ex.printStackTrace();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/x-www-form-urlencoded");
        Random rnd = new Random();
        int index = rnd.nextInt(frasiIspiranti.size());
        response.getWriter().println(frasiIspiranti.get(index));
    }
}
