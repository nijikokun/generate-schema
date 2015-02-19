var Type = require('type-of-is')

function generateGenericSchema (object) {
  for (var key in object) {
    var value = object[key]
    var type = Type.string(value).toLowerCase()

    if (type === 'undefined') {
      type = 'null'
    }

    if (type !== 'object') {
      object[key] = {
        type: type
      }
    } else {
      object[key] = generateJsonSchema(object[key])
      object[key].type = type
    }
  }

  return object
}

module.exports = generateGenericSchema