package unitn.disi.web.progettoteam19;

import java.io.*;

///ce né 1 per pagina

public class Counter implements Serializable {

    private int hits = 0;

    public Counter() {

    }

    public synchronized void manuallySet(int newvalue){
        hits = newvalue;
    }

    public synchronized int getHits() {
        return hits;
    }
    public synchronized void setHits(int c) throws RuntimeException {
        this.hits++;
    }

    public synchronized void reset() {
        this.hits = 0;
    }

    @Override
    public String toString() {
        return "" + hits;
    }
}
