package unitn.disi.web.progettoteam19;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


@WebServlet(name = "ServletFormContatti", value = "/ServletFormContatti")
public class ServletFormContatti extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,
    IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        String to = request.getParameter("email");
        String from = "tum4world@nessunonoluogonoesiste.com";

        String host = "smtp.fakeserver.com";


        Properties properties = System.getProperties();

        // Setup mail server
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");

        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {

            protected PasswordAuthentication getPasswordAuthentication() {

                return new PasswordAuthentication(from, "19Adm1n!");

            }

        });

        session.setDebug(true);


        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject("Complimenti! Ti ricontatteremo presto!");

            message.setText("Ciao" + request.getParameter("nome") + "! Ti ricontatteremo presto!\n\nLo staff di Tum4World!");

            //Transport.send(message);
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }


        response.sendRedirect("./invioConfermato.jsp");
    }
}

