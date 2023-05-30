package unitn.disi.web.progettoteam19.model;

import java.io.Serializable;
import java.util.Date;

public class Donazione implements Serializable {

    private Double importo;
    private Date donazione;

    public Donazione() {

    }

    public Double getImporto() {
        return importo;
    }

    public void setImporto(Double importo) {
        this.importo = importo;
    }

    public Date getDonazione() {
        return donazione;
    }

    public void setDonazione(Date donazione) {
        this.donazione = donazione;
    }
}
