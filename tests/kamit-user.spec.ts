var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('KamitUser unit tests:', () => {
    it('Should create a KamitUser instance', (done: Function) => {
        api.post('/kamit-users').send({
            profile: 'test'
        }).expect(200, done);
    });
});
