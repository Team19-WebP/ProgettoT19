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


            if(cookiesPref.equals("true")){
                String uniqueId = UUID.randomUUID().toString();
                Cookie c = new Cookie("clientId", uniqueId);
                c.setMaxAge(365 * 24 * 60 * 60);
                response.addCookie(c);
            } else {

                /*

                Questo sarebbe l'approccio per eliminare i cookie da parte del server
                se l'utente decide di rifiutarne l'utilizzo.

                Tuttavia il comportamento è imprevedibile su alcune delle nostre macchine perché
                cancellando tutti i cookie sembra che venga anche invalidata la sessione e il comportamento
                di alcuni browser compromette l'usabilità del sito.

                Questo problema si manifesta dal momento in cui si disabilitano i cookie dal browser.

                Eliminando questa sezione di codice riusciamo ad avere un comportamento ben definito
                col sito web che continua correttamente a funzionare anche disabilitando i cookies dal browser.

                Cookie[] allCookies = request.getCookies();
                if(allCookies != null){
                    for(Cookie c : allCookies){
                        c.setMaxAge(0);
                        c.setPath("/");
                        c.setValue("");
                        response.addCookie(c);
                    }
                }*/

                HttpSession session = request.getSession(false);
                if(session != null){
                    session.setAttribute("cookiesPref", cookiesPref);
                }
                
            }
        }
    }
}
