package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

@WebServlet(name = "frasiServlet", value = "/frasiServlet")
public class frasiServlet extends HttpServlet {
    ArrayList<String> frasiIspiranti;
    @Override
    public void init() throws ServletException {
        super.init();
        frasiIspiranti = new ArrayList<>();
        frasiIspiranti.add("Se cerchi una mano che ti aiuti nel momento del bisogno, la trovi alla fine del tuo braccio.");
        frasiIspiranti.add("C\u0027è un solo tipo di successo: quello di fare della propria vita ciò che si desidera!");
        frasiIspiranti.add("Lascia che la curiosità ti travolga.");
        frasiIspiranti.add("Dimenticare aiuta, rimediare di più.");
        frasiIspiranti.add("Il tempo non è bravo a nascondersi, se lo cerchi lo trovi sempre.");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/x-www-form-urlencoded");
        Random rnd = new Random();
        int index = rnd.nextInt(frasiIspiranti.size());
        response.getWriter().println(frasiIspiranti.get(index));
    }
}
