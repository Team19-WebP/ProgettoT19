package unitn.disi.web.progettoteam19;

import com.google.gson.Gson;
import com.google.gson.JsonArray;


import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

/**
 * Questa servlet viene usata per fornire i dati in formato json al grafico dei contatori da utilizzare
 * nella pagina admin
 */
@WebServlet(name = "servletGetHits", value = "/ServletGetHits")
public class ServletGetHits extends HttpServlet {

    private Counter counterGenerale;
    private Counter counterHome;
    private Counter counterAmministratore;
    private Counter counterAttivita;
    private Counter counterAttivita1;
    private Counter counterAttivita2;
    private Counter counterAttivita3;
    private Counter counterConfermasignin;
    private Counter counterContatti;
    private Counter counterInvioConfermato;
    private Counter counterLogin;
    private Counter counterChisiamo;
    private Counter counterLogout;
    private Counter counterSignin;
    private Counter counterAderente;
    private Counter counterSimpatizzante;


    @Override
    public void init() throws ServletException {

    }

    @Override
    public void destroy() {

    }

    /**
     * Per avere i contatori aggiornati in tempo reale recupero le hits dal servlet context e le preparo da inviare al client
     * in formato JSON
     */
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ServletContext servletContext = request.getServletContext();
        // recupero i singoli contatori per ogni pagina e li inserisco in un ArrayList
        ArrayList<Counter> contatori = new ArrayList<>();
        counterGenerale = (Counter) servletContext.getAttribute("counterGenerale");
        contatori.add(counterGenerale);
        counterHome = (Counter) servletContext.getAttribute("counterHome");
        contatori.add(counterHome);
        counterAmministratore = (Counter) servletContext.getAttribute("counterAmministratore");
        contatori.add(counterAmministratore);
        counterAttivita = (Counter) servletContext.getAttribute("counterAttivita");
        contatori.add(counterAttivita);
        counterAttivita1 = (Counter) servletContext.getAttribute("counterAttivita1");
        contatori.add(counterAttivita1);
        counterAttivita2 = (Counter) servletContext.getAttribute("counterAttivita2");
        contatori.add(counterAttivita2);
        counterAttivita3 = (Counter) servletContext.getAttribute("counterAttivita3");
        contatori.add(counterAttivita3);
        counterConfermasignin = (Counter) servletContext.getAttribute("counterConfermasignin");
        contatori.add(counterConfermasignin);
        counterContatti = (Counter) servletContext.getAttribute("counterContatti");
        contatori.add(counterContatti);
        counterInvioConfermato = (Counter) servletContext.getAttribute("counterInvioConfermato");
        contatori.add(counterInvioConfermato);
        counterLogin = (Counter) servletContext.getAttribute("counterLogin");
        contatori.add(counterLogin);
        counterChisiamo = (Counter) servletContext.getAttribute("counterChisiamo");
        contatori.add(counterChisiamo);
        counterLogout = (Counter) servletContext.getAttribute("counterLogout");
        contatori.add(counterLogout);
        counterSignin = (Counter) servletContext.getAttribute("counterSignin");
        contatori.add(counterSignin);
        counterAderente = (Counter) servletContext.getAttribute("counterAderente");
        contatori.add(counterAderente);
        counterSimpatizzante = (Counter) servletContext.getAttribute("counterSimpatizzante");
        contatori.add(counterSimpatizzante);

        // preparo la risposta da inviare in formato json
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        try (PrintWriter out = response.getWriter()){
            JsonArray array = new JsonArray();

            for (Counter d : contatori) {
                Gson gson = new Gson();
                array.add(gson.toJson(d));
            }
            out.println(array);
            out.flush();
        } catch (IOException ex) {
            ex.printStackTrace();
            response.sendRedirect(response.encodeURL("error.html"));
        }
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
