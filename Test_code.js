const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');

// Write test cases 
describe('Players API', () => {
  it('should get all players', () => {
    // Make HTTP call to app.js 
    chai.request(app)
      .get('/players')
      .end((err, res) => {
        // Assertions
      });
  });
});



