package unitn.disi.web.progettoteam19;

import java.sql.*;

public class AccessoDB {

    Class c1 =  Class.forName("org.apache.derby.jdbc.ClientDriver");

    String url = "jdbc:derby://localhost:port/path"; //TODO mettere quello giusto (forse port=1527)

    Connection connection = DriverManager.getConnection(url,"myLogin","myPassword");

    Statement statement = connection.createStatement();


    public AccessoDB() throws SQLException, ClassNotFoundException {
    }

    public boolean executeUpdate(Statement statement) throws SQLException {
        String createTableCoffee = "CREATE TABLE COFFEES " +
                "(COF_NAME VARCHAR(32), " +
                "SUP_ID INTEGER, PRICE FLOAT, " +           //queste funzioni non credo siano molto utili così, però ora abbiamo
                "SALES INTEGER, TOTAL INTEGER)";            // già il codice qui pronto per essere adattato al progetto
        try {
            statement.executeUpdate(createTableCoffee);
        }catch (SQLException e){
            return false;
        }
        return true;
    }
    public ResultSet getSet(Statement statement) throws SQLException {
        String query = "SELECT COF_NAME, PRICES FROM COFFEES";

        return statement.executeQuery(query);
    }
    public void readSet(ResultSet resultSet) throws SQLException {
        while (resultSet.next()) {
            String s = resultSet.getString("COF_NAME"); //queste funzioni non credo siano molto utili così, però ora abbiamo
            float n = resultSet.getFloat("PRICE");      // già il codice qui pronto per essere adattato al progetto
            System.out.println(s + " " + n);
        }
    }

}
