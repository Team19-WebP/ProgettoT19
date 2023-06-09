package unitn.disi.web.progettoteam19.db;

import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import javax.servlet.annotation.*;


@WebServlet(name = "ServletGetAllOneType", value = "/ServletGetAllOneType")
public class ServletGetAllOneType extends HttpServlet {
    private String dbURL = "jdbc:derby://localhost:1527/Team19DB";
    private String user = "APP";
    private String password = "admin";
    private Connection connection = null;

    @Override
    public void init() throws ServletException {
        try{
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            connection = DriverManager.getConnection(dbURL, user, password);
        } catch (ClassNotFoundException | SQLException ex){
            ex.printStackTrace();
        }
    }

    @Override
    public void destroy() {
        try {
            connection.close();
        } catch (SQLException ex){
            ex.printStackTrace();
        }
    }
    //Mandatemi un parametro con ajax
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String stringaGet = "SELECT * FROM Users WHERE TIPOLOGIA = " + request.getParameter("tipologia");

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

            /*
            // Preparing and sending json response
            response.setContentType("application/json");
            response.setCharacterEncoding("utf-8");
            try (PrintWriter out = response.getWriter()) {
                JsonArray array = new JsonArray();
                for(User c : allUsers) {
                    Gson gson = new Gson();
                    array.add(gson.toJson(c));
                }
                out.println(array);
                out.flush();
            }
            catch (IOException ex) {
                ex.printStackTrace();
                response.sendRedirect("error.html");
            }

            */

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
