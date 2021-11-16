#!/bin/bash
echo "Gerando Consumer"
cd 02_consumer/
gradle clean bootJar
echo "Movendo Jar"
cp -r build/libs/consumer.jar ../jar/
echo "Fim Consumer"