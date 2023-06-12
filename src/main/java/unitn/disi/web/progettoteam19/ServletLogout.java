package unitn.disi.web.progettoteam19;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.NumberFormat;
import java.text.ParseException;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletLogout", value = "/ServletLogout")
public class ServletLogout extends HttpServlet {
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        session.setAttribute("type", null);
        session.setAttribute("utenteLoggato", null);
        session.invalidate();
        /*ServletContext servletContext = request.getServletContext();
        if(servletContext.getAttribute("cookies").equals("false")){
            servletContext.setAttribute("cookies", null);
        }*/
        response.sendRedirect(response.encodeURL("./logout.jsp"));
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
