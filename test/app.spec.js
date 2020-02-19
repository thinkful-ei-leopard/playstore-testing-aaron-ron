const app = require('../src/app');
const supertest = require('supertest');
const { expect } = require('chai'); // what also works: const expect = require('chai').expect;

describe('App module', () => {
  describe('GET /apps', () => {
    it('should return 200 and JSON data', () => {
      return supertest(app)
        .get('/apps')
        .query({genre: 'adventure'})
        .expect(200)
        .expect('Content-Type', /json/);
    });

    it('should return data of type "array"', () => {
      return supertest(app)
        .get('/apps')
        .query({genre: 'adventure'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
        })


    });

    // refactor this afterwards to use .forEach and replace "action" with a variable
    it('should return correct apps for the genre "action"');
  });
});