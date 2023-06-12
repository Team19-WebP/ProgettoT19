package unitn.disi.web.progettoteam19.filters;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Questo filtro è usato per gestire la sessione e il suo timeout: <br>
 * a causa delle continue chiamate a <i>frasiServlet</i> per le frasi ispiranti
 * la sessione non scade mai, in questo modo invece riusciamo a farla scadere.
 */

@WebFilter(filterName = "SessionFilter")
public class SessionFilter implements Filter {

    public void init(FilterConfig config) {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpSession session = req.getSession(false);
        long currentTime = System.currentTimeMillis();

        if(session != null) {
            if(session.getAttribute("lastAccessedTime") == null){
                session.setAttribute("lastAccessedTime", currentTime);
            }
            long lastAccessedTime = (long) session.getAttribute("lastAccessedTime");
            long maxIdle = session.getMaxInactiveInterval();
            long remainingTime = maxIdle - (currentTime - lastAccessedTime)/1000;

            String value = null;
            if(session.getAttribute("cookiesPref") != null){
                value = (String) session.getAttribute("cookiesPref");
                System.out.println("[e]: value: " + value);
            }
            if(remainingTime < 0) {
                System.out.println("sessione invalidata :(");
                session.invalidate();
                session = req.getSession();
                session.setAttribute("cookiesPref", value);
            }
        } else {
            session = req.getSession();
        }
        session.setAttribute("lastAccessedTime", currentTime);
        chain.doFilter(request, response);
    }
}

