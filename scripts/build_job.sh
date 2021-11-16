#!/bin/bash
echo "Gerando Job"
cd 03_job/
gradle clean bootJar
echo "Movendo Jar"
cp -r build/libs/job.jar ../jar/
echo "Fim Job"