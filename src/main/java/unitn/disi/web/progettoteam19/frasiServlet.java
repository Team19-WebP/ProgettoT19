package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import javax.validation.constraints.Null;
import java.io.IOException;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Random;

/**
 * Servlet utilizzata per connettersi al database e recuperare le frasi ispiranti.
 * <br> Viene fatto una singola volta solamente quando viene avviato il sito web.
 * <br><br> Viene anche invocata questa servlet quando è necessario cambiare l'immagine da mostrare nel sito web.
 */

@WebServlet(name = "frasiServlet", value = "/frasiServlet")
public class frasiServlet extends HttpServlet {
    private ArrayList<String> frasiIspiranti;

    @Override
    public void init() throws ServletException {
        final String dbURL = "jdbc:derby://localhost:1527/Team19DB";
        final String user = "APP";
        final String password = "admin";
        Connection connection = null;
        try{
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            connection = DriverManager.getConnection(dbURL, user, password);
        } catch (ClassNotFoundException | SQLException ex){
            ex.printStackTrace();
        }


        frasiIspiranti = new ArrayList<>();
        try{
            Statement getting = connection.createStatement();
            ResultSet resultSet = getting.executeQuery("SELECT * FROM FRASIISPIRANTI");


            while (resultSet.next()){
                frasiIspiranti.add(resultSet.getString(2));
            }

            getting.close();
            resultSet.close();

        } catch (SQLException ex){
            ex.printStackTrace();
        }

        //Alcune frasi di default in caso di problemi col DB
        frasiIspiranti.add("Se cerchi una mano che ti aiuti nel momento del bisogno, la trovi alla fine del tuo braccio.");
        frasiIspiranti.add("C\u0027è un solo tipo di successo: quello di fare della propria vita ciò che si desidera!");
        frasiIspiranti.add("Lascia che la curiosità ti travolga.");
        frasiIspiranti.add("Dimenticare aiuta, rimediare di più.");
        frasiIspiranti.add("Il tempo non è bravo a nascondersi, se lo cerchi lo trovi sempre.");
        frasiIspiranti.add("Va bene tutto, ma c'è un limite a tutto.");
        frasiIspiranti.add("La vita è come il font nel css, non sai mai quel che ti capita.");

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
        HttpSession session = request.getSession(false);
        // Per DEBUG relativo alla sessione, vedo quanto tempo mi rimane
        if (session != null) {
            long maxIdle = session.getMaxInactiveInterval();
            long creationTime = session.getCreationTime();
            long lastAccessedTime;
            long currentTime = System.currentTimeMillis();
            try {
                lastAccessedTime = (long)session.getAttribute("lastAccessedTime");
            } catch (NullPointerException e) {
                lastAccessedTime = currentTime;
                e.printStackTrace();
            }
            long remainingTime = maxIdle - (currentTime - lastAccessedTime)/1000;
            Cookie[] cookies = request.getCookies();
            String clientId = null;
            if(cookies != null){
                for(Cookie c : cookies){
                    if(c.getName().equals("clientId")){
                        clientId = c.getValue();
                    }
                }
            }
            SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
            String creationTimeString = dateFormat.format(new Date(creationTime));
            response.getWriter().println("Remaining time: " + remainingTime);
            response.getWriter().println("ClientID: " + clientId);
            System.out.println("Remaining time: " + remainingTime);
            response.getWriter().println("Session Creation Time: " + creationTimeString);
        } else {
            response.getWriter().println("Session is null.");
        }
    }
}
