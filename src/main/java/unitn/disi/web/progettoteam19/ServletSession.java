package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.UUID;

@WebServlet(name = "ServletSession", value = "/ServletSession")
public class ServletSession extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Cookie[] cookies = request.getCookies();
        if(cookies != null){
            for(Cookie c : cookies){
                if(c.getName().equals("clientId")){
                    response.getWriter().println(c.getValue().toString());
                    return;
                }
            }
        }

        HttpSession session = request.getSession(false);
        String cookiesPref = null;
        if(session.getAttribute("cookiesPref") != null){
            cookiesPref = (String) session.getAttribute("cookiesPref");
            System.out.println("[a] cookiesPref non è nullo ed è " + cookiesPref);
        }

        if(cookiesPref != null && cookiesPref.equals("false")) {
            System.out.println("[b] cookiesPref non è nullo ed è " + cookiesPref);
            response.getWriter().println(cookiesPref);
        } else {
            System.out.println("[c] cookiesPref è nullo ed è " + cookiesPref);
            response.getWriter().print("NULL");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String cookiesPref = request.getParameter("cookies");
        if (cookiesPref != null) {

            if(cookiesPref.equals("true")){
                String uniqueId = UUID.randomUUID().toString();
                Cookie c = new Cookie("clientId", uniqueId);
                c.setMaxAge(365 * 24 * 60 * 60);
                response.addCookie(c);
                HttpSession session = request.getSession();
                session.setAttribute("cookiesPref", "true");
            } else {
                //l'utente rifiuta i cookie
                System.out.println("Cookies sono rifiutati!");
                Cookie[] cookies = request.getCookies();
                if(cookies != null){
                    for(Cookie c : cookies){
                        c.setMaxAge(0);
                        response.addCookie(c);
                    }
                }
                HttpSession session = request.getSession();
                session.setAttribute("cookiesPref", "false");
            }
        }
        else {
            request.getRequestDispatcher(response.encodeURL("./error.jsp")).forward(request, response);
        }
    }
}
