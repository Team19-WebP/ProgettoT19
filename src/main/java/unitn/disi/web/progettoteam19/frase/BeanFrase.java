package unitn.disi.web.progettoteam19.frase;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Random;
import javax.servlet.annotation.*;

public class BeanFrase implements Serializable {
   String fraseIsipirante = "Sono una frase che ti toglie il fiato di dosso";
   ArrayList<String> frasiIspiranti;

    public BeanFrase() {
       frasiIspiranti = new ArrayList<>();
        frasiIspiranti.add("Se cerchi una mano che ti aiuti nel momento del bisogno, la trovi alla fine del tuo braccio.");
        frasiIspiranti.add("C’è un solo tipo di successo: quello di fare della propria vita ciò che si desidera!");
        frasiIspiranti.add("Lascia che la curiosità ti travolga.");
        frasiIspiranti.add("Dimenticare aiuta, rimediare di più.");
        frasiIspiranti.add("Il tempo non è bravo a nascondersi, se lo cerchi lo trovi sempre.");
    }

    public String getFraseIspirante() {
        int index = (int) Math.random()*frasiIspiranti.size();
        return frasiIspiranti.get(index);
    }

//    public void setFraseIspirante() {
//       //collegamento al DB
//    }
}
