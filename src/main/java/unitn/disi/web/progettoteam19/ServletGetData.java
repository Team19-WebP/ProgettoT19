package unitn.disi.web.progettoteam19;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.text.NumberFormat;
import java.text.ParseException;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletGetData", value = "/ServletGetData")
public class ServletGetData extends HttpServlet {

    String dbURL = "jdbc:derby://localhost:1527/PrimoDB";
    String user = "APP";
    String password = "admin";
    Connection connection = null;

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

    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try{
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery("SELECT * FROM Utenti");
            String nome = rs.getString(1);
            String cognome = rs.getString(1);
            HttpSession session = request.getSession();
            session.setAttribute("nome", nome);
            session.setAttribute("cognome", cognome);
            response.sendRedirect("paginaDiProva.jsp");
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
