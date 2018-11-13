# Zombies API
#### Super simple zombie tracker API

As an MVP makes use of Mongo with Mongoose ORM. Very basic error handling.

# Routes

## Version
- Currently `v1`

### `GET /v1/zombies`
- Full list of all zombies
- Includes `ID` and `location`
- Sample response body:

```JSON
[
    {
        "_id": "5bea878471b2c0a697d0956e",
        "name": "Johnny Zombman",
        "location": "School",
        "__v": 0
    },
    {
        "_id": "5bea89f4cd6ab1a7e9661cb1",
        "name": "Jenny Brains",
        "location": "Warehouse",
        "__v": 0
    },
    {
        "_id": "5bea8d3f04b95aa8eae49657",
        "name": "Ben",
        "location": "Hospital",
        "__v": 0
    }
]
```


### `POST /v1/zombies/:name/:location`
- Add new zombie
- Params
  - `name`
  - `location`


### `PUT /v1/zombies/:name/:location`
- Update the zombie with `:name` to new `:location`
