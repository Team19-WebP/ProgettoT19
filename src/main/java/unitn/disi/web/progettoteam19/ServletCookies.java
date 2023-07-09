package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;


/**
 * Servlet per la gestione dei cookies, questa servlet prende la preferenza
 * dell'utente nel caso li accetti si genererà un cookie cookiesPref = true
 * quindi quando si invaliderà la sessione non verrà mostrata l'informativa
 * Se l'utente decidesse di rifiutare i cookies, questo cookies non viene
 * impostato ed eventuali cookies aggiuntivi verranno eliminati ed ogni volta
 * che la sessione si invalida verrà mostrata nuovamente l'informativa.
 *
*/
@WebServlet(name = "ServletCookies", value = "/ServletCookies")
public class ServletCookies extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        Cookie[] allCookies = request.getCookies();
        if(allCookies != null){
            for(Cookie c : allCookies){
                if(c.getName().equals("cookiesPref")){
                    response.getWriter().print(c.getValue());
                    return;
                }
            }
        }

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
        if (cookiesPref == null) {
            request.getRequestDispatcher(response.encodeURL("./error.jsp")).forward(request, response);
        } else {
            // nel caso
            if (cookiesPref.equals("false")) {
                System.out.println("POST");
                cancellaCookies(request, response);
            } else if (cookiesPref.equals("true")) {
                Cookie cp = new Cookie("cookiesPref", "true");
                cp.setMaxAge(365 * 24 * 60 * 60);
                response.addCookie(cp);
            }
            HttpSession session = request.getSession(false);
            if (session != null) {
                session.setAttribute("cookiesPref", cookiesPref);
            }
        }
    }


    private void cancellaCookies (HttpServletRequest request, HttpServletResponse response) {
        Cookie[] allCookies = request.getCookies();
        if (allCookies != null) {
            for (Cookie c : allCookies) {
                c.setMaxAge(0);
                c.setPath("/");
                c.setValue("");
                response.addCookie(c);
            }
        }
    }
}
