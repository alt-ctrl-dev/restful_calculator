const should = require("should"),
    request = require("supertest"),
    app = require("../app");

describe("Route Test Suite", function () {

    it('GET / should exist', function (done) {
        request(app)
            .get('/')
            .expect(302, done);
    });

    it('POST / should fail', function (done) {
        request(app)
            .post('/')
            .expect(404, done);
    });

    it('GET /ui should exist', function (done) {
        request(app)
            .get('/ui')
            .expect(200, done);
    });

    it('POST /ui should fail', function (done) {
        request(app)
            .post('/ui')
            .expect(404, done);
    });
})