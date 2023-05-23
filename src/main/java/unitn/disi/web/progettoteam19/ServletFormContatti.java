package unitn.disi.web.progettoteam19;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ServletFormContatti", value = "/ServletFormContatti")
public class ServletFormContatti extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,
    IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,
    IOException {
        /*
        String nome = request.getParameter("nome");
        String cognome = request.getParameter("cognome");
        String email = request.getParameter("email");
        String comboBox = request.getParameter("comboBox");
        String altroTextarea = request.getParameter("altroTextarea");
        */

        //simuliamo l'invio della mail

        response.sendRedirect("./invioConfermato.jsp");
    }
}

