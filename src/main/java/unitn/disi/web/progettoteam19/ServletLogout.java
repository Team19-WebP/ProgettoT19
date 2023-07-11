package unitn.disi.web.progettoteam19;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "ServletLogout", value = "/ServletLogout")
public class ServletLogout extends HttpServlet {
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        session.setAttribute("type", null);
        session.setAttribute("utenteLoggato", null);
        String infoCookies = (String) session.getAttribute("infoCookies");
        session.invalidate();
        // passo l'attributo infoCookies alla nuova sessione
        // in modo tale da non mostrare nuovamente l'informativa
        session = request.getSession();
        session.setAttribute("infoCookies", infoCookies);
        response.sendRedirect(response.encodeURL("./logout.jsp"));
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process_request(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process_request(request, response);
    }
}
