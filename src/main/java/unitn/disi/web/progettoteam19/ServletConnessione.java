package unitn.disi.web.progettoteam19;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.NumberFormat;
import java.text.ParseException;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletConnessione", value = "/ServletConnessione")
public class ServletConnessione extends HttpServlet {
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html; charset=utf-8;");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        ServletContext servletContext = request.getServletContext();
        try{
            Statement statement = ((Connection) servletContext.getAttribute("conn")).createStatement();
            ResultSet rs = statement.executeQuery("SELECT * FROM Utenti");
            while(rs.next()){
                out.println("<h1> " +
                        rs.getString(1) + rs.getString(2) + "</h1>");
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        out.println("</body></html>");
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
