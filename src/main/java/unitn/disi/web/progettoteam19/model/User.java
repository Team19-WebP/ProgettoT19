package unitn.disi.web.progettoteam19.model;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Model per rappresentare gli utenti registrati al sito web.
 */

public class User implements Serializable {
    private String nome;
    private String cognome;
    private Date datadinascita;
    private String email;
    private String cellulare;
    private String tipologia;
    private String username;

    public User() {

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public Date getDatadinascita() {
        return datadinascita;
    }

    public void setDatadinascita(Date datadinascita) {
        this.datadinascita = datadinascita;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCellulare() {
        return cellulare;
    }

    public void setCellulare(String cellulare) {
        this.cellulare = cellulare;
    }

    public String getTipologia() {
        return tipologia;
    }

    public void setTipologia(String tipologia) {
        this.tipologia = tipologia;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDateFormatITA(){
        String formatITA = "dd-MM-YYYY";
        SimpleDateFormat formatted = new SimpleDateFormat(formatITA);
        return formatted.format(datadinascita);
    }

    @Override
    public String toString() {
        String sb = "";
        sb = "Nome: " + nome + "\n";
        sb += "Cognome: " + cognome + "\n";
        sb += "Data di nascita: " + getDateFormatITA() + "\n";
        sb += "Email: " + email + "\n";
        sb += "Cellulare: " + cellulare + "\n";
        sb += "Tipologia: " + tipologia + "\n";
        sb += "Username: " + username + "\n";
        return sb;
    }
}
