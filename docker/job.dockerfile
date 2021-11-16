FROM openjdk:11
VOLUME /tmp
ADD ./jar/job.jar /opt/job/
EXPOSE 8080
WORKDIR /opt/job/
CMD ["java", "-jar", "job.jar"]