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
        response.setContentType("text/html");
//        Cookie[] allCookies = request.getCookies();
//        if(allCookies != null){
//            for(Cookie c : allCookies){
//                if(c.getName().equals("clientId")){
//                    response.getWriter().print(c.getValue());
//                    return;
//                }
//            }
//        }
//
//        if(allCookies != null){
//            for(Cookie c : allCookies){
//                System.out.println(c.getName() + ": " + c.getValue());
//                c.setMaxAge(0);
//                c.setValue("");
//                c.setPath("/");
//                response.addCookie(c);
//            }
//        }

        HttpSession session = request.getSession(false);
        String cookiesPref = null;
        if(session != null){
            cookiesPref = (String) session.getAttribute("cookiesPref");
        }

        if(cookiesPref == null){
            response.getWriter().print("no");
        } else {
            response.getWriter().print(cookiesPref);
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String cookiesPref = request.getParameter("cookies");
        if(cookiesPref == null){
            request.getRequestDispatcher(response.encodeURL("./error.jsp")).forward(request, response);
        } else {
            if(cookiesPref.equals("false")){

//                String uniqueId = UUID.randomUUID().toString();
//                Cookie c = new Cookie("clientId", uniqueId);
//                c.setMaxAge(365 * 24 * 60 * 60);
//                response.addCookie(c);
                Cookie[] allCookies = request.getCookies();
                if(allCookies != null){
                    for(Cookie c : allCookies){
                        c.setMaxAge(0);
                        c.setPath("/");
                        c.setValue("");
                        response.addCookie(c);
                    }
                }

            }
            HttpSession session = request.getSession(false);
            if(session != null){
                session.setAttribute("cookiesPref", cookiesPref);
            }
        }
    }
}
