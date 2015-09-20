# adbook-exemplar

## Installation

```
npm install
node app.js
```

## Testing

### Curl client

```
# List all entries
curl http://localhost:3000/phonebook

# Add an entry
curl -X POST -H 'Content-Type: application/json' -d '{"surname": "Smith", "firstname": "John", "phone_number": "123456"}' http://localhost:3000/phonebook

# Retrieve the newly added entry
curl http://localhost:3000/phonebook/1

# Update the entry
curl -X PUT -H 'Content-Type: application/json' -d '{"surname": "Smith", "firstname": "John", "phone_number": "1234567"}' http://localhost:3000/phonebook/1

# Retrieve the updated entry
curl http://localhost:3000/phonebook/1

# Create more entries
curl -X POST -H 'Content-Type: application/json' -d '{"surname": "Smith", "firstname": "Joan", "phone_number": "2938"}' http://localhost:3000/phonebook
curl -X POST -H 'Content-Type: application/json' -d '{"surname": "Jackson", "firstname": "Peter", "phone_number": "8492"}' http://localhost:3000/phonebook
curl -X POST -H 'Content-Type: application/json' -d '{"surname": "Johnson", "firstname": "Jack", "phone_number": "3467", "address": "Wydeming on the Wye"}' http://localhost:3000/phonebook

# Find entries with a surname of Smith
curl http://localhost:3000/phonebook?surname=smith
# Find entries with a surname of Jackson
curl http://localhost:3000/phonebook?surname=jackson

# Delete an entry
curl -X DELETE http://localhost:3000/phonebook/2

# Find all Smiths
curl http://localhost:3000/phonebook?surname=smith
```

### Unit tests

```
./node_modules/mocha/bin/mocha
```
