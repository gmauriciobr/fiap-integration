#!/bin/bash
echo "Gerando Core"
cd 01_core/
gradle clean bootJar
echo "Movendo Jar"
cp -r build/libs/core.jar ../jar/
echo "Fim Core"