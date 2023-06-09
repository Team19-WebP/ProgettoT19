package unitn.disi.web.progettoteam19.db;

import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.NumberFormat;
import java.text.ParseException;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletEliminaProfilo", value = "/ServletEliminaProfilo")
public class ServletEliminaProfilo extends HttpServlet {
    String dbURL = "jdbc:derby://localhost:1527/Team19DB";
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

        HttpSession session = request.getSession();
        User utenteLoggato = (User) session.getAttribute("utenteLoggato");

        String stringaGet = "DELETE FROM USERS WHERE USERNAME = ?";

        try{
            PreparedStatement inserimento = connection.prepareStatement(stringaGet);
            inserimento.setString(1, utenteLoggato.getUsername());
            inserimento.executeUpdate();
        } catch (SQLException ex){
            ex.printStackTrace();
        }

        session.setAttribute("type", null);
        session.setAttribute("utenteLoggato", null);
        session.invalidate();
        ServletContext servletContext = request.getServletContext();
        if(servletContext.getAttribute("cookies").equals("false")){
            servletContext.setAttribute("cookies", null);
        }
        response.sendRedirect(response.encodeURL("./eliminato.jsp"));
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
