package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebFilter(filterName = "FiltroSimpatizzante")
public class FiltroSimpatizzante implements Filter {

    public void init(FilterConfig config) throws ServletException {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        HttpSession session = req.getSession(false);

        if(session != null && session.getAttribute("type") != null && session.getAttribute("type").equals("simpatizzante")){
            chain.doFilter(request, response);
        } else {
            req.getRequestDispatcher(res.encodeURL("./home.jsp")).forward(req, res);
        }
    }
}
