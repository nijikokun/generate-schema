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

console.log(JSON.stringify(GenerateSchema.json('Product', [
    {
        "id": 2,
        "name": "An ice sculpture",
        "price": 12.50,
        "tags": ["cold", "ice"],
        "dimensions": {
            "length": 7.0,
            "width": 12.0,
            "height": 9.5
        },
        "warehouseLocation": {
            "latitude": -78.75,
            "longitude": 20.4
        }
    },
    {
        "id": 3,
        "name": "A blue mouse",
        "price": 25.50,
        "dimensions": {
            "length": 3.1,
            "width": 1.0,
            "height": 1.0
        },
        "warehouseLocation": {
            "latitude": 54.4,
            "longitude": -32.7
        }
    }
]), null, 2))
```

Output:

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Product Set",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "number"
      },
      "name": {
        "type": "string"
      },
      "price": {
        "type": "number"
      },
      "tags": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "dimensions": {
        "type": "object",
        "properties": {
          "length": {
            "type": "number"
          },
          "width": {
            "type": "number"
          },
          "height": {
            "type": "number"
          }
        }
      },
      "warehouseLocation": {
        "type": "object",
        "properties": {
          "latitude": {
            "type": "number"
          },
          "longitude": {
            "type": "number"
          }
        }
      }
    },
    "required": [
      "id",
      "name",
      "price",
      "dimensions",
      "warehouseLocation"
    ],
    "title": "Product"
  }
}
```

## Methods

### g.generic(Object object)

Generates generic schema where property types are described using primitives

### g.json(String title, Mixed object)

Generate JSON Schema from given object.

- `title` is optional
- `object` must be of type `Object` or `Array`

## Binary usage

```bash
$ generate-schema [-g] [--generic] [<file>]
```

### REPL Mode

When no file is specified you will enter a repl mode.

Example (`generate-schema -g`):

```
Welcome to Generate Schema 1.1.0

  Mode: generic

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