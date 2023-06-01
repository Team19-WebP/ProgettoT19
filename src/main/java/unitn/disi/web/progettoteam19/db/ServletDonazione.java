package unitn.disi.web.progettoteam19.db;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;


@WebServlet(name = "ServletDonazione", value = "/ServletDonazione")
public class ServletDonazione extends HttpServlet {

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
        //salva nel DB
        Date data = new Date();
        System.out.println(data);
        String pattern = "YYYY-MM-dd"; //questo è il format della data nel DB
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        System.out.println(simpleDateFormat.format(data));
        String likeWeLike = "dd-MM-YYYY";
        SimpleDateFormat returnHome = new SimpleDateFormat(likeWeLike);
        System.out.println(returnHome.format(data));


    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process_request(request, response);
        response.sendRedirect(response.encodeURL("./aderente.jsp"));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process_request(request, response);
        response.sendRedirect(response.encodeURL("./aderente.jsp"));
    }
}
