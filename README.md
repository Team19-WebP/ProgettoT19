## UNITN Introduction to Web Programming Project
This is the project for the Introduction to Web Programming course taught by Prof. Giovanna Varni at the University of Trento.

### Installation and Demo

1. Clone this repository: `git clone https://github.com/Team19-WebP/ProgettoT19.git .`
2. Navigate to the root of the project: `cd ProgettoT19`
3. Run: `./mvnw clean package`
4. Build the Docker image: `docker build -t tum4world_image .`
5. Create and start the Docker container: `docker run -p 8080:8080 -p 1527:1527 --name tum4world_container tum4world_image`
6. Or, start it if already created: `docker start tum4world_container`
7. Go to the [website](http://localhost:8080/progettoteam19/)
8. Stop the Docker container: `docker stop tum4world_container`

### Credentials for Different Users

| Type           | User      | Password  |
|----------------|-----------|-----------|
| Amministratore | admin     | admin     |
| Simpatizzante  | simpatico | simpatico |
| Aderente       | aderente  | aderente  |

### Tum4World Original Requirements
- [English Version](Requirements.md)
- [Italian Version](Requisiti.md)
