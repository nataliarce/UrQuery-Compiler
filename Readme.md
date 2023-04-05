# UrQuery
## Información Sobre los Desarrolladores del Proyecto.
##### Universidad Nacional
###### EIF400 - Paradigmas de Programación
###### Profesor: Carlos Loría Sáenz
###### Grupo 03-1pm
###### Integrantes:
 - Natalia Arce  Rodríguez 
 - Michelle Delgado Meneses
 - Luis Felipe Morera 
- Emmanuel Paniagua Villalobos
###### II Ciclo
###### 2022
## Programas necesarios para utilizar urQUery
- Java JDK 19
- MongoDB
- Maven
- React
- Swipl
## Instrucciones de Compilación y Ejecución
### Instrucciones para utilizar React 
1. Poner **spring.thymeleaf.prefix=file:///C:///Users/NNNN//api//target//classes//static/** donde **NNNN** es la ruta donde se descargo el proyecto (Por favor solo pegar la ruta desde donde dice Users hasta antes de api
2. Ejecutar el comando **npm install**.
3. Ejecutar el comando **npm run build**.
### Instrucciones para Levantar el Server de Prolog
1. Para levantar el server de Prolog primero se debe descargar e instalar **SWI-Prolog** el cual permitira correr los programas realizados en este lenguaje.
2. Luego se abre un cmd desde la carpeta donde se encuentra el **_.pl_** del servidor.
3. Seguidamente, se ejecuta el comando:```swipl nnnn.pl```, donde **nnnn** es el nombre del programa que se desea correr, el cual iniciara el servidor de manera que este ahora puede recibir requests y mandar responses.
### Instrucciones para Levantar el Server de JAVA
1.  Este es un proyecto de Maven, por lo que se debe tener instalado el mismo para poder correrlo (disponible en:  *https://maven.apache.org/download.cgi* junto con las instrucciones de instalación. 
2. Habiendo instalado Maven, se empieza por abrir un cmd en el archivo del proyecto principal del proyecto (donde se encuentra el **pom.xml**).
3.  Seguidamente, se ejecuta el comando ```mvn compile```, el cual compila el proyecto y genera el folder **target**.
4.  Después,  se ejecuta el comando ```mvn install```, el cual tiene el objetivo de construir (hacer el build) del proyecto, asi como de instalar las dependencias necesarias en el repositorio local de maven (disponible en **C:\Users\nnnn\.m2** donde **nnnn** es el nombre del usuario actual loggeado en la computadora). En caso de que se quisiera limpiar el folder target, esto se puede realizar utilizando este comando: ```mvn clean install```.
5. Por último, para ejecutar este programa, se debe utilizar el siguiente comando     ``` mvn exec:java -Dexec.mainClass=urquery.api.ApiApplication```, el cual indica que el server se inició en el puerto 8080.
### Instrucciones para levantar la Base de Datos en MongoDB
1. Para levantar la base de Datos MongoDB, se debe ir a la dirección donde esté instlalado, por ejemplo **C:\Program Files\MongoDB\Server\6.0**.
2. Luego, entramos a la carpeta **bin**.
3. Ejecutamos el archivo **mongod.exe** y mantenemos esa consola abierta mientras el programa este en uso.
