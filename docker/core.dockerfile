FROM openjdk:11
VOLUME /tmp
ADD ./jar/core.jar /opt/core/
EXPOSE 8080
WORKDIR /opt/core/
CMD ["java", "-jar", "core.jar"]