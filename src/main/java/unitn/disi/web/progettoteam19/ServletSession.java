package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.UUID;

@WebServlet(name = "SessionServlet", value = "/SessionServlet")
public class ServletSession extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Cookie[] cookies = request.getCookies();
        if(cookies != null){
            for(Cookie c : cookies){
                if(c.getName().equals("clientId")){
                    response.getWriter().println(c.getValue());
                    return;
                }
            }
        }
        response.getWriter().print("NULL");
        /*ServletContext servletContext = request.getServletContext();
        String cookiesPref = (String) servletContext.getAttribute("cookies");
        if(cookiesPref != null) {
            response.getWriter().print(cookiesPref);
        } else {
            response.getWriter().print("Cookies are not set.");
        }*/
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String cookiesPref = request.getParameter("cookies");
        if (cookiesPref != null) {

            /*ServletContext servletContext = request.getServletContext();

            if (servletContext.getAttribute("cookies") == null ) {
                servletContext.setAttribute("cookies", cookiesPref);
                if(!cookiesPref.equals("true")){
                    for(Cookie c : request.getCookies()){
                        c.setMaxAge(0);
                        response.addCookie(c);
                    }
                }
                response.getWriter().write("Cookies preferences are set on " + cookiesPref + " and they saved for this session.");
            } else {
                response.getWriter().write("Cookies preferences were already set as " + servletContext.getAttribute("cookies"));
            }*/
            if(cookiesPref.equals("true")){
                //TODO da vedere se non è gia presente l'ID
                String uniqueId = UUID.randomUUID().toString();
                Cookie c = new Cookie("clientId", uniqueId);
                c.setMaxAge(365 * 24 * 60 * 60);
                response.addCookie(c);
            } else {
                //l'utente rifiuta i cookie
                Cookie[] cookies = request.getCookies();
                if(cookies != null){
                    for(Cookie c : cookies){
                        c.setMaxAge(0);
                        response.addCookie(c);
                    }
                }
            }
        }
        else {
            request.getRequestDispatcher(response.encodeURL("./error.jsp")).forward(request, response);
        }
    }
}
