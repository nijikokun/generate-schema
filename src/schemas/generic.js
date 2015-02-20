// Modules
var Type = require('type-of-is')

module.exports = function GenericSchemaGenerator (object, output) {
  output = output || {}

  for (var key in object) {
    var value = object[key]
    var type = Type.string(value).toLowerCase()

    if (type === 'undefined') {
      type = 'null'
    }

    if (type !== 'object') {
      output[key] = {
        type: type
      }
    } else {
      output[key] = GenericSchemaGenerator(object[key])
      output[key].type = type
    }
  }

  return output
}