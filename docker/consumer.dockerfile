FROM openjdk:11
VOLUME /tmp
ADD ./jar/consumer.jar /opt/consumer/
EXPOSE 8080
WORKDIR /opt/consumer/
CMD ["java", "-jar", "consumer.jar"]