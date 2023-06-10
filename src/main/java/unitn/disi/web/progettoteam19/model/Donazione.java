package unitn.disi.web.progettoteam19.model;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * Model per rappresentare le donazioni.
 */

public class Donazione implements Serializable {

    /**
     * Importo della donazione
     */
    private Double importo;

    /**
     * La data, il mese e il giorno della donazione
     */
    private int month;
    private int day;
    private int year;

    public Donazione() {
    }

    public Double getImporto() {
        return importo;
    }

    public void setImporto(Double importo) {
        this.importo = importo;
    }


    public void setDataDonazione(LocalDate dataDonazione) {
        this.month = dataDonazione.getMonthValue();
        this.day = dataDonazione.getDayOfMonth();
        this.year = dataDonazione.getYear();
    }
    public void setDataDonazione(int year, int month, int day) {
        this.month = month;
        this.day = day;
        this.year = year;
    }

    public int getAnnoDonazione(){
        return year;
    }

    public int getMeseDonazione(){
        return month;
    }

    public int getGiornoDonazione(){
        return day;
    }

    @Override
    public String toString() {
        String donaz = getGiornoDonazione() + "/" + getMeseDonazione() + "/" + getAnnoDonazione();
        donaz += "\n" + importo;
        return donaz;
    }
}
