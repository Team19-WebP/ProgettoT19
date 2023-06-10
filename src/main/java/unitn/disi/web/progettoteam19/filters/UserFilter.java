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

        if(session != null){
            System.out.println("In UF con: sessione ->" + session.getAttribute("type"));
        } else {
            System.out.println("In UF con: session -> null");
        }

        ServletContext servletContext = request.getServletContext();
        String cookies = (String) servletContext.getAttribute("cookies");

        if(session == null || session.getAttribute("type") == null) {
            if(cookies == null || cookies.equals("false")){
                servletContext.setAttribute("cookies", null);
            }
            req.setAttribute("expired", "true");
            req.getRequestDispatcher(res.encodeURL("./login.jsp")).forward(req, res);
        } else {
            for(Cookie c : req.getCookies()){
                System.out.println(c.getName() + ": " + c.getValue());
            }
            chain.doFilter(request, response);
        }
    }
}
