package unitn.disi.web.progettoteam19;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

@WebServlet(name = "ServletReset", value = "/ServletReset")
public class ServletReset extends HttpServlet {

    private void reset(Counter counter){
        if(counter != null){
            counter.reset();
        }
    }

    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = request.getServletContext();
        Enumeration<String> countersNames = servletContext.getAttributeNames();
        while (countersNames.hasMoreElements()) {
            String name = countersNames.nextElement();
            if (name.startsWith("counter")) {
                Counter c = (Counter) servletContext.getAttribute(name);
                reset(c);
            }
        }
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
