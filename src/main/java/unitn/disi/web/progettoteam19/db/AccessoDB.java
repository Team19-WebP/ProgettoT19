package unitn.disi.web.progettoteam19.db;


import java.sql.*;

public class AccessoDB {
    String dbURL = "jdbc:derby://localhost:1527/Team19DB";
    String user = "APP";
    String password = "admin";
    Connection connection = null;

    public AccessoDB(){
        initConn();
    }
    public void initConn() {
        try{
            Class.forName("org.apache.derby.jdbc.ClientDriver");
            connection = DriverManager.getConnection(dbURL, user, password);
        } catch (ClassNotFoundException | SQLException ex){
            ex.printStackTrace();
        }
    }
    public void destroyConn() {
        try {
            connection.close();
        } catch (SQLException ex){
            ex.printStackTrace();
        }
    }

    //metodo per evitare dupllicazioni di codice nei tre metodi che seguono
    private String getString(String usernameToCheck, String stringaGet) {
        try{
            PreparedStatement inserimento = connection.prepareStatement(stringaGet);
            inserimento.setString(1, usernameToCheck);
            ResultSet rs = inserimento.executeQuery();

            if(rs.next()){
                return rs.getString(1);
            } else {
                return null;
            }

        } catch (SQLException ex){
            ex.printStackTrace();
            return null;
        }
    }

    public String getUserName(String usernameToCheck){
        String stringaGet = "SELECT USERNAME FROM USERS WHERE USERNAME = ?";

        String retval = getString(usernameToCheck, stringaGet);
        destroyConn();
        return retval;
    }
    public String getPassword(String usernameToCheck){
        String stringaGet = "SELECT PASSWORD FROM USERS WHERE USERNAME = ?";

        String retval = getString(usernameToCheck, stringaGet);
        destroyConn();
        return retval;
    }
    public String getTipologia(String usernameToCheck){
        String stringaGet = "SELECT TIPOLOGIA FROM USERS WHERE USERNAME = ?";

        String retval = getString(usernameToCheck, stringaGet);
        destroyConn();
        return retval;
    }
    public void dropUser(String usernameToEliminate) {
        String stringaGet = "DELETE FROM USERS WHERE USERNAME = ?";

        try{
            PreparedStatement inserimento = connection.prepareStatement(stringaGet);
            inserimento.setString(1, usernameToEliminate);
            inserimento.executeUpdate();
            destroyConn();
        } catch (SQLException ex){
            ex.printStackTrace();
            destroyConn();
        }
    }
}
