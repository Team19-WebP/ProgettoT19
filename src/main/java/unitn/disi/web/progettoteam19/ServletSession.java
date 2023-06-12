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

        Cookie[] allCookies = request.getCookies();
        if(allCookies != null){
            for(Cookie c : allCookies){
                System.out.println(c.getName() + ": " + c.getValue());
                if(c.getName().equals("clientId")){
                    response.getWriter().print(c.getValue());
                    return;
                }
            }
        }

        if(allCookies != null){
            for(Cookie c : allCookies){
                System.out.println(c.getName() + ": " + c.getValue());
                c.setMaxAge(0);
                c.setPath("/");
            }
        }

        HttpSession session = request.getSession(false);
        String cookiesPref = null;
        if(session != null){
            System.out.println("ID che ho: " + session.getId());
            cookiesPref = (String) session.getAttribute("cookiesPref");
        }

        //System.out.println(cookiesPref);

        if(cookiesPref == null){
            response.getWriter().print("no");
            System.out.println("no :)");
        } else {
            response.getWriter().print(cookiesPref);
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String cookiesPref = request.getParameter("cookies");
        if(cookiesPref == null){
            System.out.println("ops");
            request.getRequestDispatcher(response.encodeURL("./error.jsp")).forward(request, response);
        } else {
            System.out.println("cookiespref non è nullo");


            if(cookiesPref.equals("true")){
                System.out.println("cookies accetatti!");
                String uniqueId = UUID.randomUUID().toString();
                Cookie c = new Cookie("clientId", uniqueId);
                c.setMaxAge(365 * 24 * 60 * 60);
                response.addCookie(c);
            } else {
                System.out.println("cookies rifiutati!");

                Cookie[] allCookies = request.getCookies();
                if(allCookies != null){
                    for(Cookie c : allCookies){
                        c.setMaxAge(0);
                        c.setPath("/");
                        c.setValue("");
                        response.addCookie(c);
                    }
                }

                HttpSession session = request.getSession(false);
                if(session != null){
                    session.setAttribute("cookiesPref", cookiesPref);
                    System.out.println("ID con cp: " + session.getId());
                }


            }
        }
    }
}
