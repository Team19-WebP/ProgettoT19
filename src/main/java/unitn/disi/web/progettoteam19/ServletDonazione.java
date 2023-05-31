package unitn.disi.web.progettoteam19;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.annotation.*;

@WebServlet(name = "ServletDonazione", value = "/ServletDonazione")
public class ServletDonazione extends HttpServlet {
    protected void process_request(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //salva nel DB
        Date data = new Date();
        System.out.println(data);
        String pattern = "YYYY-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        System.out.println(simpleDateFormat.format(data));
        String likeWeLike = "dd-MM-YYYY";
        SimpleDateFormat returnHome = new SimpleDateFormat(likeWeLike);
        System.out.println(returnHome.format(data));


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
