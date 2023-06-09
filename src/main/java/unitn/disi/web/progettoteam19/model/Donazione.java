package unitn.disi.web.progettoteam19.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

public class Donazione implements Serializable {

    private Double importo;
    private LocalDate dataDonazione;

    public Donazione() {

    }

    public Double getImporto() {
        return importo;
    }

    public void setImporto(Double importo) {
        this.importo = importo;
    }

    public LocalDate getDataDonazione() {
        return dataDonazione;
    }

    public void setDataDonazione(LocalDate dataDonazione) {
        this.dataDonazione = dataDonazione;
    }
    public void setDataDonazione(int year, int month, int day) {
        this.dataDonazione = LocalDate.of(year, month, day);
    }

    public int getAnnoDonazione(){
        return dataDonazione.getYear();
    }

    public int getMeseDonazione(){
        return dataDonazione.getMonthValue();
    }

    public int getGiornoDonazione(){
        return dataDonazione.getDayOfMonth();
    }

    @Override
    public String toString() {
        String donaz = getGiornoDonazione() + "/" + getMeseDonazione() + "/" + getAnnoDonazione();
        donaz += "\n" + importo;
        return donaz;
    }
}
