package unitn.disi.web.progettoteam19.model;

import java.io.Serializable;
import java.util.Date;

public class User implements Serializable {
    private String nome;
    private String cognome;
    private Date datadinascita;
    private String email;
    private int cellulare;
    private Tipo tipologia;
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

    public int getCellulare() {
        return cellulare;
    }

    public void setCellulare(int cellulare) {
        this.cellulare = cellulare;
    }

    public Tipo getTipologia() {
        return tipologia;
    }

    public void setTipologia(Tipo tipologia) {
        this.tipologia = tipologia;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
