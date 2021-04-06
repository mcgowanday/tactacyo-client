# production: 'https://tic-tac-toe-api-production.herokuapp.com',
# development: 'https://tic-tac-toe-api-development.herokuapp.com'

# VARIABLE=VALUE sh curl-scripts/auth/yo-sign-up.sh


curl "https://tic-tac-toe-api-development.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
