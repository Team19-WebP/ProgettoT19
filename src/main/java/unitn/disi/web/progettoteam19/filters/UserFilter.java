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

@WebFilter(filterName = "UserFilter")
public class UserFilter implements Filter {

    public void init(FilterConfig config) {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        HttpSession session = req.getSession(false);

        System.out.println("DENTRO USER FILTER");

        if(session == null || session.getAttribute("type") == null) {
            req.setAttribute("expired", "true");
            /*if(session != null){
                session.invalidate();
            }*/
            req.getRequestDispatcher(res.encodeURL("./login.jsp")).forward(req, res);
        } else {
            chain.doFilter(request, response);
        }
    }
}
