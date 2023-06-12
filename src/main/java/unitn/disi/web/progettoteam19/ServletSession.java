package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "SessionServlet", value = "/SessionServlet")
public class ServletSession extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = request.getServletContext();
        String cookiesPref = (String) servletContext.getAttribute("cookies");
        if(cookiesPref != null) {
            System.out.println(cookiesPref);
            response.getWriter().print(cookiesPref);
        } else {
            System.out.println("Cookies are not set.");
            response.getWriter().print("Cookies are not set.");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String cookiesPref = request.getParameter("cookies");
        if (cookiesPref != null) {

            ServletContext servletContext = request.getServletContext();

            if (servletContext.getAttribute("cookies") == null ) {
                servletContext.setAttribute("cookies", cookiesPref);
                System.out.println("Cookies preferences are set on " + cookiesPref + " and they saved for this session.");
                if(!cookiesPref.equals("true")){
                    for(Cookie c : request.getCookies()){
                        c.setMaxAge(0);
                        response.addCookie(c);
                    }
                }
                response.getWriter().write("Cookies preferences are set on " + cookiesPref + " and they saved for this session.");
            } else {
                System.out.println("Cookies preferences were already set as " + servletContext.getAttribute("cookies"));
                response.getWriter().write("Cookies preferences were already set as " + servletContext.getAttribute("cookies"));
            }
        }
        else {
            request.getRequestDispatcher(response.encodeURL("./error.jsp")).forward(request, response);
        }
    }
}
