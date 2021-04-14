!/bin/bash

ID='607622777c8c5d0017656d1d'
TOKEN='e0262e1706aa445a1b00696b20fa5b87'
INDEX=8
VALUE='x'
OVER=false

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
