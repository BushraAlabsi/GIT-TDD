var chai = require('chai')
var chaiHttp = require('chai-http');
var mocha = require('mocha')
chai.use(chaiHttp);
var expect = chai.expect;
var should = chai.should();
var db = require('../database/index')


db.save({catName:'Basbos',ownerEmail:'String',imageUrl:'String',adoptionMessage:'String'})
describe('HTTP verbs work', function() {
   
    it('Get works', function(done) {
      chai.request('http://localhost:1128')
  .get('/cats')
  .end(function(err, res){
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body[0].should.have.property('catName');
      res.body[0].catName.should.equal('Basbos');	

      done();
  });
  })
   it('POST works', function(done) {
      chai.request('http://localhost:1128')
  .post('/cats')
  .send({catName:'String111',ownerEmail:'String',imageUrl:'String',adoptionMessage:'String'})
  .end(function(err, res){
      res.should.have.status(201);
      chai.request('http://localhost:1128')
  		.get('/cats')
  		.end(function(err, res){
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body[res.body.length-1].should.have.property('catName');
      res.body[res.body.length-1].catName.should.equal('String111');

  });
      done();
  });

})
})

