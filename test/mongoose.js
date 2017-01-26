var GenerateSchema = require('../src/index')
var yelp = require('./fixtures/review')

describe('Mongoose', function () {
  describe('Type Checks', function () {
    var schema

    beforeEach(function () {
      schema = GenerateSchema.mongoose(yelp)
    })

    it('._id should be of type [ObjectId]', function () {
      schema._id.type.should.equal('ObjectId')
    })
  })
})
