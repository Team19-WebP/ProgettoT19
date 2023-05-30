package unitn.disi.web.progettoteam19;

import unitn.disi.web.progettoteam19.db.AccessoDB;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ServletSignin", value = "/ServletSignin")
public class ServletSignin extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        AccessoDB accessoDB = new AccessoDB();
        if(accessoDB.getUserName(request.getParameter("username")) != null){
            System.out.println("Problemi");
            response.sendRedirect("./temp.jsp");
        } else {
            request.getRequestDispatcher(response.encodeURL("/ServletPushUserData")).include(request, response);
            response.sendRedirect("./confermaSignin.jsp");
        }
    }
}
