package unitn.disi.web.progettoteam19;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

/**
 * Servlet che risponde a richieste get restituendo una frase scelta randomicamente.
 */

@WebServlet(name = "frasiServlet", value = "/frasiServlet")
public class frasiServlet extends HttpServlet {
    private ArrayList<String> frasiIspiranti;

    @Override
    public void init() throws ServletException {

        frasiIspiranti = new ArrayList<>();
        frasiIspiranti.add("Insieme possiamo fare la differenza, tendendo la mano a chi ha bisogno e riempiendo il mondo di amore e speranza.");
        frasiIspiranti.add("C\u0027è un solo tipo di successo: quello di fare della propria vita ciò che si desidera!");
        frasiIspiranti.add("Lascia che la curiosità ti travolga.");
        frasiIspiranti.add("Il tempo non è bravo a nascondersi, se lo cerchi lo trovi sempre.");
        frasiIspiranti.add("Ogni atto di gentilezza, per piccolo che sia, può cambiare la vita di qualcuno. Sii la luce che illumina il cammino degli altri.");
        frasiIspiranti.add("Non importa quanto poco possiamo dare, ciò che conta davvero è la volontà di condividere e supportare chi è in difficoltà.");
        frasiIspiranti.add("Ogni persona merita una chance di rifiorire. Sii l'angelo che gli estende la mano e lo aiuta a rialzarsi.");
        frasiIspiranti.add("L'amore e la compassione sono i pilastri su cui si basa ogni azione di aiuto. Coltivali e vedrai il mondo trasformarsi sotto i tuoi occhi.");
        frasiIspiranti.add("Condividi la gioia e vedrai i sorrisi moltiplicarsi.");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/x-www-form-urlencoded");
        Random rnd = new Random();
        int index = rnd.nextInt(frasiIspiranti.size());
        response.getWriter().println(frasiIspiranti.get(index));
    }
}
