# Generate JSON Schema with JSON Objects

Effortlessly convert your JSON Object to a basic JSON Schema template for quick documentation.

# Installation

```bash
$ npm install generate-schema --save
```

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
    "type": "object"
  },
  "_embedded": {
    "gists": {
      "type": "array"
    },
    "type": "object"
  },
  "total": {
    "type": "number"
  }
}
```

# License

MIT