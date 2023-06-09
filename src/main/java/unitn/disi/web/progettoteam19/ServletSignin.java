package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.sql.*;

@WebServlet(name = "ServletSignin", value = "/ServletSignin")
public class ServletSignin extends HttpServlet {

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

    public String getUserName(String usernameToCheck){
        String stringaGet = "SELECT USERNAME FROM USERS WHERE USERNAME = ?";

        try{
            PreparedStatement inserimento = connection.prepareStatement(stringaGet);
            inserimento.setString(1, usernameToCheck);
            ResultSet rs = inserimento.executeQuery();

            if(rs.next()){
                return rs.getString(1);
            } else {
                return null;
            }

        } catch (SQLException ex){
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(getUserName(request.getParameter("username")) != null){
            response.sendRedirect(response.encodeURL("./temp.jsp"));
        } else {
            request.getRequestDispatcher(response.encodeURL("/ServletPushUserData")).include(request, response);
            response.sendRedirect(response.encodeURL("./confermaSignin.jsp"));
        }
    }
}
