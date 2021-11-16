#!/bin/bash
echo '###### PREPARANDO BUILD #########'
bash ./scripts/build_core.sh
bash ./scripts/build_consumer.sh
bash ./scripts/build_job.sh
echo '###### Fim #########'
exit