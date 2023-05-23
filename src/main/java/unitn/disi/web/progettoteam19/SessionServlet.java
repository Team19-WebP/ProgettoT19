package unitn.disi.web.progettoteam19;



import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;



@WebServlet(name = "SessionServlet", value = "/SessionServlet")
public class SessionServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext servletContext = request.getServletContext();
        String cookiesPref = (String) servletContext.getAttribute("cookies");
        if(cookiesPref != null) {
            response.getWriter().print(cookiesPref);
        } else {
            response.getWriter().print("Cookies are not set.");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String cookiesPref = request.getParameter("cookies");
        if (cookiesPref != null) {

            HttpSession session = request.getSession();
            session.setAttribute("auth", "false");

            ServletContext servletContext = request.getServletContext();

            if (servletContext.getAttribute("cookies") == null ) {
                servletContext.setAttribute("cookies", cookiesPref);
                response.getWriter().write("Cookies preferences are set on " + cookiesPref + " and they saved for this session.");
            } else {
                response.getWriter().write("Cookies preferences were already set as " + servletContext.getAttribute("cookies"));
            }
        }
        else {
            request.getRequestDispatcher(response.encodeURL("./error.jsp")).forward(request, response);
        }
    }
}
