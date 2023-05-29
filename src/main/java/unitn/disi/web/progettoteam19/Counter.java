package unitn.disi.web.progettoteam19;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

//ce ne dovrà essere 1 per pagina

public class Counter implements Serializable {

    private int hits = 0;
    private int hitsHome = 0;
    private int hitsAderente = 0;
    private int hitsSimp = 0;
    private int hitsAdmin = 0;
    private int hitsLogin = 0;


    public Counter() {
        ObjectInputStream oi = null;
        try {
            oi = new ObjectInputStream(Files.newInputStream(Paths.get("counter.ser")));
            Counter c = (Counter) oi.readObject();
            this.hits = c.hits;
            this.hitsHome = c.hitsHome;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public synchronized int getHits() {
        return hits;
    }
    public synchronized void setHits(int c) throws RuntimeException {
        this.hits++;
    }

    public synchronized int getHitsHome() {
        return hitsHome;
    }
    public synchronized void setHitsHome(int c) throws RuntimeException {
        this.hitsHome++;
    }

    public synchronized void reset() {
        this.hits = 0;
        //tutti attributi a 0
        ObjectOutputStream oi = null;
        try{
            oi = new ObjectOutputStream(Files.newOutputStream(Paths.get("counter.ser")));
            oi.writeObject(hits);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String toString() {
        return "" + hits;
    }


    @Override
    protected void finalize() throws Throwable {
        ObjectOutputStream oi = null;
        try{
            oi = new ObjectOutputStream(Files.newOutputStream(Paths.get("counter.ser")));
            oi.writeObject(this);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
