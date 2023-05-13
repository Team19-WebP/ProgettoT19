package unitn.disi.web.progettoteam19.frase;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import javax.servlet.annotation.*;

public class BeanFrase {
   String fraseIsipirante = "Sono una frase che ti toglie il fiato di dosso";
   String oldFrase = "";

    public BeanFrase() {
    }

    public String getFraseIsipirante() {
        return fraseIsipirante;
    }

    public void setFraseIsipirante() {
       //collegamento al DB
    }
}
