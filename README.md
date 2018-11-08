# Zombies API
#### Super simple zombie tracker API

# Routes

## Version
- Currently `v1`
- Prefix `v1` onto below routes

### `GET /zombies`
- Full list of all zombies
- Includes `ID` and `location`
- Sample response body:

```JSON
[
    {
        "name": "Zombie John",
        "location": "Warehouse"
    },
    {
        "name": "Billie Brains",
        "location": "Wall"
    }
]
```

### `GET /locations`
- Full list of all possible zombie locations
- Includes `ID`
- Sample response body:

```JSON
[
    {
        "ID": 1,
        "name": "School"
    },
    {
        "ID": 2,
        "name": "Hospital"
    },
    {
        "ID": 3,
        "name": "Warehouse"
    }
]
```

### `GET /zombies/:id`
- Get zombie with `:id`
- Includes `ID` and `locationID`

### `POST /zombies`
- Add new zombie
- Body
  - `name`
  - `location`
