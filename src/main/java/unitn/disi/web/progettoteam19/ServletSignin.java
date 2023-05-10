package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ServletSignin", value = "/ServletSignin")
public class ServletSignin extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        //TODO fare i controlli da backend tipo che username non sia gia preso

        //TODO mandare cose al DB
        response.sendRedirect("./confermaSignin.jsp");
    }
}
