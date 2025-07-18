# Stage 1: Build the app
FROM eclipse-temurin:17-jdk-jammy AS builder
WORKDIR /app
COPY . .
# Add this line to give execute permissions to mvnw
RUN chmod +x ./mvnw
RUN ./mvnw clean package

# Stage 2: Run the app
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "app.jar"]
