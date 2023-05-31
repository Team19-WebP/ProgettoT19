package unitn.disi.web.progettoteam19;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.NumberFormat;
import java.text.ParseException;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletReset", value = "/ServletReset")
public class ServletReset extends HttpServlet {

    private void reset(Counter counter){
        if(counter != null){
            counter.reset();
        }
    }

    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = request.getServletContext();

        Counter c = (Counter) servletContext.getAttribute("counterGenerale");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterHome");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterAmministratore");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterAttivita");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterAttivita1");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterAttivita2");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterAttivita3");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterConfermasignin");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterContatti");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterInvioConfermato");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterLogin");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterLogout");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterSignin");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterAderente");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterSimpatizzante");
        reset(c);
        c = (Counter) servletContext.getAttribute("counterChisiamo");
        reset(c);

        response.sendRedirect(response.encodeURL("amministratore.jsp"));
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
