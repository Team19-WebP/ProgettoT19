package unitn.disi.web.progettoteam19;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import javax.servlet.ServletException;
import java.io.PrintWriter;
import java.text.NumberFormat;
import java.text.ParseException;

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

