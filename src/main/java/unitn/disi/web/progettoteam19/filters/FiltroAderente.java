package unitn.disi.web.progettoteam19.filters;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Questo filtro è usato per evitare che un utente loggato, ma non come aderente,
 * <br> acceda alla pagina aderente.jsp
 */

@WebFilter(filterName = "FiltroAderente")
public class FiltroAderente implements Filter {

    public void init(FilterConfig config) throws ServletException {
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

        if(session != null && session.getAttribute("type") != null && session.getAttribute("type").equals("aderente")){
            chain.doFilter(request, response);
        } else {
            req.getRequestDispatcher(res.encodeURL("./home.jsp")).forward(req, res);
        }

    }
}
