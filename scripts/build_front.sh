#!/bin/bash
echo "Gerando Front"
cd 04_front/
npm run-script build
echo "Movendo webpack"
rm -rf ../webpack/* 
cp -r build/* ../webpack
echo "Fim Front"