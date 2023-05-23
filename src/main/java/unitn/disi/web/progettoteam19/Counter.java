package unitn.disi.web.progettoteam19;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

//ce ne dovrà essere 1 per pagina

public class Counter implements Serializable {

    private int hits = 0;

    public Counter() {
        ObjectInputStream oi = null;
        try {
            oi = new ObjectInputStream(Files.newInputStream(Paths.get("counter.ser")));
            hits = (int) oi.readObject();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }


    public synchronized int getHits() {
        return hits;
    }

    public synchronized void addHit() throws RuntimeException {
        this.hits++;
        ObjectOutputStream oi = null;
        try{
            oi = new ObjectOutputStream(Files.newOutputStream(Paths.get("counter.ser")));
            oi.writeObject(hits);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public synchronized void reset() {
        this.hits = 0;
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
}
