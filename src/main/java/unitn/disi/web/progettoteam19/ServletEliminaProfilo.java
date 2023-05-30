package unitn.disi.web.progettoteam19;

import unitn.disi.web.progettoteam19.db.AccessoDB;
import unitn.disi.web.progettoteam19.model.User;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.NumberFormat;
import java.text.ParseException;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletEliminaProfilo", value = "/ServletEliminaProfilo")
public class ServletEliminaProfilo extends HttpServlet {
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession session = request.getSession();
        User utenteLoggato = (User) session.getAttribute("infoUtente");
        AccessoDB accessoDB = new AccessoDB();
        accessoDB.dropUser(utenteLoggato.getUsername());
        //TODO eliminare utente da db

        HttpSession session = request.getSession();
        session.setAttribute("auth", null);
        session.setAttribute("type", null);
        session.invalidate();
        ServletContext servletContext = request.getServletContext();
        if(servletContext.getAttribute("cookies").equals("false")){
            servletContext.setAttribute("cookies", null);
        }
        response.sendRedirect("./eliminato.jsp");
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
