var GenerateSchema = require('../src/index')
var review = require('./fixtures/review')

describe('MongoDB', function () {
  describe('Type Checks', function () {
    var schema

    beforeEach(function () {
      schema = GenerateSchema.mongodb(review)
    })

    it('._id should be of type [ObjectId]', function () {
      schema.properties._id.type.should.equal('ObjectId')
    })

    it('.approved_by should be of type [null]', function () {
      schema.properties.approved_by.type.should.equal('null')
    })

    it('.votes.funny should be of type [decimal]', function () {
      schema.properties.votes.properties.funny.type.should.equal('decimal')
    })

    it('.date should be of type [date]', function () {
      schema.properties.date.type.should.equal('date')
    })
  })
})
