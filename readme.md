# Generate Schemas

Effortlessly convert your JSON Object to JSON Schema, Mongoose Schema, or a Generic template for quick documentation / upstart.

Schema Outputs

- Generic
- JSON Schema
- [Mongoose](http://mongoosejs.com/) Schema
- [BigQuery](https://cloud.google.com/bigquery/) Schema

[![Build Status][travis-image]][travis-url]
[![version][npm-version]][npm-url]
[![License][npm-license]][license-url]
[![Downloads][npm-downloads]][npm-url]

# Installation

```bash
$ npm install generate-schema --save
```

Optionally, for the binary install globally with `-g` (see below)

# Usage

```js
var GenerateSchema = require('generate-schema')

// Capture Schema Output
var schema = GenerateSchema.json('Product', [
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
])
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

### g.mongoose(Object object)

Generates Mongoose Schema from a given object.

### g.bigquery(Object object)

Generates [Google BigQuery](https://cloud.google.com/bigquery/) schema from a given object.

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

#### Modes

- JSON Schema (Default Mode)
- `-g, --generic` - Generic Mode
- `-m, --mongoose` - Mongoose Mode
- `-b, --big-query` - Google BigQuery Mode

# License

MIT

[license-url]: https://github.com/Nijikokun/generate-schema/blob/master/LICENSE

[travis-url]: https://travis-ci.org/nijikokun/generate-schema
[travis-image]: https://travis-ci.org/nijikokun/generate-schema.svg?branch=master

[npm-url]: https://www.npmjs.com/package/generate-schema
[npm-license]: https://img.shields.io/npm/l/generate-schema.svg?style=flat
[npm-version]: https://badge.fury.io/js/generate-schema.svg
[npm-downloads]: https://img.shields.io/npm/dm/generate-schema.svg?style=flat