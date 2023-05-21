package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebFilter(filterName = "UserFilter")
public class UserFilter implements Filter {

    public void init(FilterConfig config) throws ServletException {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpSession session = req.getSession(true);
        if(session.getAttribute("bannerCookies") == null) {
            session.setAttribute("provaFilter", "sono una nuova sessione");
            session.setAttribute("bannerCookies", true);
        } else {
            session.setAttribute("provaFilter", "non sono una nuova sessione");
        }
        chain.doFilter(request, response);
    }
}
