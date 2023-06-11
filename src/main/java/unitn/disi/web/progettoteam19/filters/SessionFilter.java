package unitn.disi.web.progettoteam19.filters;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Questo filtro è usato per evitare che un utente NON loggato,
 * acceda a pagine a cui non potrebbe accedere.
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
        HttpServletResponse res = (HttpServletResponse) response;
        HttpSession session = req.getSession(false);
        long currentTime = System.currentTimeMillis();
        if(session != null) {

            long lastAccessedTime = (long) session.getAttribute("lastAccessedTime");
            long maxIdle = session.getMaxInactiveInterval();
            long remainingTime = maxIdle - (currentTime - lastAccessedTime)/1000;

            if(remainingTime < 0) {
                session.invalidate();
                session = req.getSession();
            }
        } else {
            session = req.getSession();
        }
        session.setAttribute("lastAccessedTime", currentTime);
        chain.doFilter(request, response);
    }
}

