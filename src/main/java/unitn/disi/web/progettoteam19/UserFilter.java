package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

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

        if(session == null || session.getAttribute("type") == null) {
            ServletContext servletContext = request.getServletContext();
            String cookies = (String) servletContext.getAttribute("cookies");
            if(cookies == null || cookies.equals("false")){
                servletContext.setAttribute("cookies", null);
            }
            req.setAttribute("expired", "true");
            req.getRequestDispatcher(res.encodeURL("./login.jsp")).forward(req, res);
        } else {
            chain.doFilter(request, response);
        }
    }
}
