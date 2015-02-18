# JSON Object to JSON Schema

Effortlessly convert your JSON Object to a basic JSON Schema template for quick documentation.

# Installation

```bash
$ npm install generate-schema --save
```

Optionally, for the binary install globally with `-g` (see below)

# Usage

```js
var GenerateSchema = require('generate-schema')

console.log(GenerateSchema({
  "_links": {
    "self": {
      "href": "/gists/42"
    },
    "star": {
      "href": "/gists/42/star"
    }
  },
  "id": "42",
  "created_at": "2014-04-14T02:15:15Z",
  "description": "Description of Gist",
  "content": "String contents"
}));
```

Output:

```json
{
  "_links": {
    "self": {
      "href": {
        "type": "string"
      },
      "type": "object"
    },
    "star": {
      "href": {
        "type": "string"
      },
      "type": "object"
    },
    "type": "object"
  },
  "id": {
    "type": "string"
  },
  "created_at": {
    "type": "string"
  },
  "description": {
    "type": "string"
  },
  "content": {
    "type": "string"
  }
}
```

## Binary usage

```bash
ᐅ ./bin/generate-schema
Welcome to Generate Schema 1.1.0

* Example Usage:
  > {a:'b'}
  { a: { type: 'string' } }

To quit type: exit

> {a:'b'}
{
  "a": {
    "type": "string"
  }
}
```

# License

MIT