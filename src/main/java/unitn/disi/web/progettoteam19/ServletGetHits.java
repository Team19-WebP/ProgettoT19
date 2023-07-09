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
import java.util.Enumeration;

/**
 * Questa servlet viene usata per fornire i dati in formato json al grafico dei contatori da utilizzare
 * nella pagina admin
 */
@WebServlet(name = "servletGetHits", value = "/ServletGetHits")
public class ServletGetHits extends HttpServlet {

    @Override
    public void init() throws ServletException {}
    @Override
    public void destroy() {}

    /**
     * Per avere i contatori aggiornati in tempo reale recupero le hits dal servlet context e le preparo da inviare al client
     * in formato JSON
     */
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ServletContext servletContext = request.getServletContext();
        ArrayList<Counter> contatori = new ArrayList<>();
        // recupero tutti i nomi degli attributi della servlet e ciclo recuperando solo quelli
        // che iniziano con "counter"
        Enumeration <String> countersNames = servletContext.getAttributeNames();
        while(countersNames.hasMoreElements()) {
            String name = countersNames.nextElement();
            if(name.startsWith("counter")) {
                Counter c =  (Counter) servletContext.getAttribute(name);
                contatori.add(c);
            }
        }

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
