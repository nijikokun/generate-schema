# Generate Schemas

Effortlessly convert your JSON Object to JSON Schema, Mongoose Schema, or a Generic template for quick documentation / upstart.

[![Build Status][travis-image]][travis-url]
[![version][npm-version]][npm-url]
[![License][npm-license]][license-url]
[![Downloads][npm-downloads]][npm-url]


## Schema Outputs

- Generic
- [JSON Schema][json-schema]
- [Mongoose Schema][mongoose-schema]
- [BigQuery Schema][bigquery-schema]


<hr />


# Installation

```bash
$ npm install generate-schema --save
```


Optionally, add `-g` to the above if you want the `generate-schema` command line executable. (See below.)


<hr />


# Usage


## JS <abbr title="Application Programming Interface">API</abbr>


### Example

Source:

```js
var GenerateSchema = require('generate-schema');

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
]);
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


### Methods

#### `g.generic(Object object)`

Generates a generic schema from `object`. Property types are described using primitives.

#### `g.json([String title,] Mixed object)`

Generates JSON Schema from `object`.

- `title` is optional
- `object` must be of type `Object` or `Array`

#### `g.mongoose(Object object)`

Generates a [Mongoose Schema][mongoose-schema] from `object`.

#### `g.bigquery(Object object)`

Generates a [Google BigQuery][bigquery-schema] schema from  `object`.

<hr />


## <abbr title="Command Line Interface">CLI</abbr>

CLI Usage:

```bash
$ generate-schema [options] [<file>]
```


### Options

| Option            | Mode                  |
| ------            | ----                  |
| (default mode)    | JSON Schema           |
| `-g, --generic`   | Generic Mode          |
| `-m, --mongoose`  | Mongoose Mode         |
| `-b, --big-query` | Google BigQuery Mode  |


### <abbr title="Read Eval Print Loop">REPL</abbr> (Interactive Mode)

When no file is specified, `generate-schema` will enter a <abbr title="Read Eval Print Loop">REPL</abbr> mode.

#### Example

```
$ generate-schema -b
Welcome to Generate Schema 2.3.1

* Mode:
  bigquery

* Example:
  > {a:"b"}
  [{"name":"a","type":"STRING","mode":"NULLABLE"}]

To quit type: exit

> {a:"b"}
[
  {
    "name": "a",
    "type": "STRING",
    "mode": "NULLABLE"
  }
]
```

<hr />


# License

[MIT][license-url]


<!-- links -->
[license-url]: https://github.com/Nijikokun/generate-schema/blob/master/LICENSE

[travis-url]: https://travis-ci.org/nijikokun/generate-schema
[travis-image]: https://travis-ci.org/nijikokun/generate-schema.svg?branch=master

[json-schema]: http://json-schema.org
[mongoose-schema]: http://mongoosejs.com
[bigquery-schema]: https://cloud.google.com/bigquery/

[npm-url]: https://www.npmjs.com/package/generate-schema
[npm-license]: https://img.shields.io/npm/l/generate-schema.svg?style=flat
[npm-version]: https://badge.fury.io/js/generate-schema.svg
[npm-downloads]: https://img.shields.io/npm/dm/generate-schema.svg?style=flat
