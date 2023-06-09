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
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String to = "tum4world@nessunonoluogonoesiste.com";
        String from = "tum4world-contattiUtenti@nessunonoluogonoesiste.com";
        String pw = "19Adm1n!";
        String host = "smtp.fakeserver.com";

        String emailUser = request.getParameter("email");
        String nome = request.getParameter("nome");
        String cognome = request.getParameter("cognome");
        String motivazione = request.getParameter("comboBox");

        String oggetto = "Richiesta di contatto di " + nome + " " + cognome + "!";
        String testo = "Richiesta di contatto da parte di:\n\tNome: " + nome  +
                "\n\tCognome: " + cognome + "\n\tIndirizzo email: " + emailUser + "\n\n";
        testo += "Motiviazione del contatto:\n" + motivazione + "\n\n";

        Properties properties = System.getProperties();

        // Setup mail server
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.timeout", 1000);


        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {

            protected PasswordAuthentication getPasswordAuthentication() {

                return new PasswordAuthentication(from, pw);

            }

        });

        session.setDebug(true);


        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject(oggetto);

            message.setText(testo);

            Transport.send(message);
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }

        response.sendRedirect(response.encodeURL("./invioConfermato.jsp"));
    }
}

