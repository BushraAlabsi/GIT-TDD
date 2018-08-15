var chai = require('chai')
var chaiHttp = require('chai-http');
var mocha = require('mocha')
chai.use(chaiHttp);
var expect = chai.expect;
var should = chai.should();
var db = require('../database/index')


db.save({catName:'String1',ownerEmail:'String',imageUrl:'String',adoptionMessage:'String'})
describe('', function() {
    it('Get ', function(done) {
      chai.request('http://localhost:1128')
  .get('/cats')
  .end(function(err, res){
      res.should.have.status(200);
      res.body.should.be.a('array');
      //res.body[0].should.have.property('catName');
      done();
  });
})
})

