FROM tomcat:9.0
LABEL maintainer="federico.menegoz.work@gmail.com"

# Add application WAR file
ADD target/progettoteam19-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/progettoteam19.war


# Install Derby
RUN apt-get update && apt-get install -y wget \
    && wget https://dlcdn.apache.org//db/derby/db-derby-10.16.1.1/db-derby-10.16.1.1-bin.tar.gz -O /tmp/derby.tar.gz \
    && mkdir -p /opt/derby \
    && tar -xzf /tmp/derby.tar.gz -C /opt/derby --strip-components=1 \
    && rm /tmp/derby.tar.gz

# Add Database
COPY schema.sql /schema.sql
# Set Derby environment variables
ENV DERBY_HOME=/opt/derby
ENV PATH=$DERBY_HOME/bin:$PATH

# Create tables and populate them
RUN sh -c "$DERBY_HOME/bin/startNetworkServer & sleep 2 && cat /schema.sql | java -jar $DERBY_HOME/lib/derbyrun.jar ij"

# Expose Derby and Tomcat ports
EXPOSE 8080 1527

# Start Derby and Tomcat
CMD ["sh", "-c", "$DERBY_HOME/bin/startNetworkServer & catalina.sh run"]
#CMD ["sh", "-c", "$DERBY_HOME/bin/startNetworkServer & sleep 5 && cat /schema.sql | java -jar $DERBY_HOME/lib/derbyrun.jar ij  && catalina.sh run"]


