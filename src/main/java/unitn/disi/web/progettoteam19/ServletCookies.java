package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;


/**
 * Servlet che salva un cookies aggiuntivo chiamato infoCookies in modo tale che l'informativa
 * venga mostrata solo se scade il cookies o venga eliminato dal browser
 * Nel caso che i cookies siano disabilitati allora l'informativa viene visualizzata la prima volta
 * e finché l'utente naviga usando i collegamenti presenti nelle diverse pagine della webApp non viene
 * mostrata nuovamente.
*/
@WebServlet(name = "ServletCookies", value = "/ServletCookies")
public class ServletCookies extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        // controllo la presenza di cookies se trovo il infoCookies allora restituisco true
        Cookie[] allCookies = request.getCookies();
        if (allCookies != null) {
            for (Cookie c : allCookies) {
                if (c.getName().equals("infoCookies")) {
                    response.getWriter().print("true");
                }
            }
        }

        // se non ho trovato cookies allora mi trovo nel caso in cui i cookies sono disabilitati
        // e controllo se trovo il parametro infoCookies come attributo della sessione
        HttpSession session = request.getSession(false);
        String infoCookies = null;
        if (session != null) {
            infoCookies = (String) session.getAttribute("infoCookies");
        }
        // se è null allora significa che è la prima iterazione al sito restituisco false
        if (infoCookies == null) {
            response.getWriter().print("false");
        } else {
        // se è un attributo definito allora restituisco true
            response.getWriter().print("true");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // metodo post che registra la conferma dei cookies da parte dell'utente
        String infoCookies = request.getParameter("cookies");


        if (infoCookies == null) {
            request.getRequestDispatcher(response.encodeURL("./error.jsp")).forward(request, response);
        } else {
            Cookie cp = new Cookie("infoCookies", "true");
            cp.setMaxAge(365 * 24 * 60 * 60);
            response.addCookie(cp);
        }
        // registro la presa visione anche come attributo nella session in nel caso
        // i cookies siano disabilitati
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.setAttribute("infoCookies", infoCookies);
        }
    }
}
