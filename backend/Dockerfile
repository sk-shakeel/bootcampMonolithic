FROM maven:3.6.1-jdk-11 AS maven_build

WORKDIR .

COPY . .

RUN mvn clean package -DskipTests

FROM openjdk:11

COPY --from=maven_build ./target/*.jar ./final.jar	

EXPOSE 8000

ENTRYPOINT ["java","-jar","./final.jar"]
