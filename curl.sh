while sleep 2; do curl --silent $1 | jq .hostname ; done
