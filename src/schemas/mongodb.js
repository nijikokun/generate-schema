// Modules
var Type = require('type-of-is');
var Utils = require('../utils');

function getNativeType(string) {
  switch (string) {
    case 'array':
      return 'array';

    case 'buffer':
      return 'object';

    case 'boolean':
      return 'boolean';

    case 'date':
      return 'string';

    case 'null':
      return 'null';

    case 'number':
      return 'number';

    case 'objectid':
      return 'ObjectId';

    case 'regexp':
      return 'string';

    case 'string':
      return 'string';

    case 'undefined':
      return 'undefined';

    default:
      return 'object';
  }
}

module.exports = function Process(object, output) {
  var retVal = output || {
    title: 'Generated schema for Root',
    bsonType: 'object',
    properties: {},
  };

  for (var key in object) {
    var value = object[key];
    var originalType = null;
    var elementType = null;
    var type = null;

    if (value instanceof Buffer) {
      type = 'buffer';
    }

    if (
      value != null &&
      typeof value.toString !== 'undefined' &&
      value.toString().match(/^[0-9a-fA-F]{24}$/)
    ) {
      type = 'objectid';
    }

    if (!type) {
      type = Type.string(value).toLowerCase();
    }

    if (type === 'string' && !/^[0-9]+$/.test(value) && Utils.isDate(value)) {
      type = 'date';
    }

    if (type === 'object') {
      retVal.properties[key] = Process(object[key], {
        bsonType: 'object',
        properties: {},
      });
    } else {
      if (type === 'undefined') {
        type = 'null';
      }

      if (type === 'array' && value.length) {
        originalType = type;
        type = undefined;

        for (var index = 0, length = value.length; index < length; index++) {
          elementType = Type.string(value[index]).toLowerCase();

          if (type && elementType !== type) {
            type = 'mixed';
            break;
          } else {
            type = elementType;
          }
        }
      }

      if (originalType && originalType === 'array') {
        retVal.properties[key] = { type: [getNativeType(type)] };
      } else {
        retVal.properties[key] = { type: getNativeType(type) };
      }
    }
  }

  return retVal;
};
