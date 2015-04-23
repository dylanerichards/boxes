# Boxes
## A RESTful API

### Run instructions

- Clone the repository and `cd` into it
- Make sure MongoDB is running and accepting connections (`mongod`)
- Run `node server.js`
- Visit `localhost:3000`

### Consuming the API

Since the application has no front-end, you will need a tool to submit requests to the API. A nice one is [Postman](http://www.getpostman.com).

#### Available endpoints

- `GET /boxes` -- Returns a JSON array of all of the boxes in the database
- `GET /boxes/:id` -- Returns the first box in the database for the given id
- `GET /find` -- Returns 3 JSON objects, sorted by address, date, and weight.
- `DELETE /boxes/:id` -- Deletes the first box in the database for the given id
- `POST /boxes` -- Creates a new box with the given parameters. You can provide an `id`, `customerName`, `address`, and `items`.









