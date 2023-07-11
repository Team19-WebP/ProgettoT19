package unitn.disi.web.progettoteam19;

import java.io.*;

/**
 * Classe che implementa un contatore degli accessi.
 * <br>Un oggetto della classe Counter sarà istanziato per ogni pagina del sito web
 * <br>di cui è interessante tracciare il numero di accessi che vengono fatti.
 */
public class Counter implements Serializable {

    private int hits = 0;
    private String page = null;
    public Counter() {

    }

    public Counter(int defaultValue, String page){
        hits = defaultValue;
        this.page = page;
    }

    public synchronized void manuallySetHits(int newvalue){
        hits = newvalue;
    }

    public synchronized int getHits() {
        return hits;
    }
    public synchronized void setHits(int c) throws RuntimeException {
        this.hits++;
    }

    public String getPage() {
        return page;
    }
    public void setPage(String page) throws RuntimeException {
        this.page = page;
    }
    public synchronized void reset() {
        this.hits = 0;
    }

    @Override
    public String toString() {
        return String.valueOf(hits);
    }
}
