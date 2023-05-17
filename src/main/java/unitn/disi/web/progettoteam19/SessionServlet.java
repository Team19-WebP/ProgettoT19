package unitn.disi.web.progettoteam19;

import argo.jdom.JdomParser;
import argo.jdom.JsonNode;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

import static argo.jdom.JsonNodeFactories.*;

@WebServlet(name = "SessionServlet", value = "/SessionServlet")
public class SessionServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(true);
        String cookiesPref = (String) session.getAttribute("cookies");
//        response.setContentType("application/x-www-form-urlencoded");
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

            if (session.getAttribute("cookies") == null ) {
                session.setAttribute("cookies", cookiesPref);
                response.getWriter().write("Cookies preferences are set on " + cookiesPref + " and they saved for this session.");
            } else {
                response.getWriter().write("Cookies preferences were already set as " + session.getAttribute("cookies"));
            }
        }
    }
}
