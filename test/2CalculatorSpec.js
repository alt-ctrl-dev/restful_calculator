const should = require("should"),
    request = require("supertest"),
    app = require("../app");

describe("Calculator Test Suite", function () {

    it('POST /calculator should fail', function (done) {
        request(app)
            .post('/calculator')
            .expect(404, done);
    });

    it('should GET intial json data', function (done) {
        request(app)
            .get('/calculator')
            .expect(function (res) {
                res.body.display.should.be.eql("0")
                should.exist(res.body.links.add);
                should.exist(res.body.links.subtract);
                should.exist(res.body.links.multiply);
                should.exist(res.body.links.divide);
                should.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.not.exist(res.body.links.zero);
                should.not.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);
                res.body.links.nine.should.match(/\baction=number/);
                res.body.links.nine.should.match(/\bdisplay=9/);

                res.body.links.add.should.match(/\baction=add/);
                res.body.links.add.should.match(/\bnumber=0/);
                res.body.links.add.should.match(/\bdisplay=0/);
            })
            .expect(200, done)
    });

    it('should return display zero when clear (AC) command is pressed', function (done) {
        request(app)
            .get('/calculator?action=clear')
            .expect(function (res) {
                res.body.display.should.be.eql("0")
                should.exist(res.body.links.add);
                should.exist(res.body.links.subtract);
                should.exist(res.body.links.multiply);
                should.exist(res.body.links.divide);
                should.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.not.exist(res.body.links.zero);
                should.not.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);
                res.body.links.nine.should.match(/\baction=number/);
                res.body.links.nine.should.match(/\bdisplay=9/);

                res.body.links.add.should.match(/\baction=add/);
                res.body.links.add.should.match(/\bnumber=0/);
                res.body.links.add.should.match(/\bdisplay=0/);
            })
            .expect(200, done)
    });

    it('should fail when wrong action is passed', function (done) {
        request(app)
            .get('/calculator?display=0&action=test')
            .expect(400, done);
    });

    it('should return display 0. when display 0 and dot command is passed', function (done) {
        request(app)
            .get('/calculator?display=0&action=dot')
            .expect(function (res) {
                res.body.display.should.be.eql("0.")
                should.not.exist(res.body.links.add);
                should.not.exist(res.body.links.subtract);
                should.not.exist(res.body.links.multiply);
                should.not.exist(res.body.links.divide);
                should.not.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.exist(res.body.links.zero);
                should.not.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);

                res.body.links.one.should.match(/\baction=number/);
                res.body.links.one.should.match(/\bdisplay=0.1/);
            })
            .expect(200, done);
    });

    it('should return display 0.2 when display is 0. and number (2) command is pressed', function (done) {
        request(app)
            .get('/calculator?display=0.2&action=number')
            .expect(function (res) {
                res.body.display.should.be.eql("0.2")
                should.exist(res.body.links.add);
                should.exist(res.body.links.subtract);
                should.exist(res.body.links.multiply);
                should.exist(res.body.links.divide);
                should.not.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.exist(res.body.links.zero);
                should.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);
                res.body.links.zero.should.not.match(/\boperation=/);
                res.body.links.zero.should.match(/\baction=number/);
                res.body.links.zero.should.not.match(/\bnumber=/);
                res.body.links.zero.should.match(/\bdisplay=0.20/);
                res.body.links.two.should.not.match(/\boperation=/);
                res.body.links.two.should.match(/\baction=number/);
                res.body.links.two.should.not.match(/\bnumber=/);
                res.body.links.two.should.match(/\bdisplay=0.22/);
            })
            .expect(200, done);
    });

    it('should return display 1.2 when display is 1. and number (2) command is pressed', function (done) {
        request(app)
            .get('/calculator?display=1.2&action=number')
            .expect(function (res) {
                res.body.display.should.be.eql("1.2")
                should.exist(res.body.links.add);
                should.exist(res.body.links.subtract);
                should.exist(res.body.links.multiply);
                should.exist(res.body.links.divide);
                should.not.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.exist(res.body.links.zero);
                should.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);
                res.body.links.zero.should.not.match(/\boperation=/);
                res.body.links.zero.should.match(/\baction=/);
                res.body.links.zero.should.not.match(/\bnumber=/);
                res.body.links.zero.should.match(/\bdisplay=/);
            })
            .expect(200, done);
    });

    it('should return display 0 when display is 1 and add (+) command is pressed', function (done) {
        request(app)
            .get('/calculator?display=1&action=add')
            .expect(function (res) {
                res.body.display.should.be.eql("0")
                should.not.exist(res.body.links.add);
                should.not.exist(res.body.links.subtract);
                should.not.exist(res.body.links.multiply);
                should.not.exist(res.body.links.divide);
                should.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.not.exist(res.body.links.zero);
                should.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);
            })
            .expect(200, done);
    });

    it('should return display 0 when display is 1.2 and add (+) command is pressed', function (done) {
        request(app)
            .get('/calculator?display=1.2&action=add')
            .expect(function (res) {
                res.body.display.should.be.eql("0")
                should.not.exist(res.body.links.add);
                should.not.exist(res.body.links.subtract);
                should.not.exist(res.body.links.multiply);
                should.not.exist(res.body.links.divide);
                should.not.exist(res.body.links.equal);
                should.not.exist(res.body.links.zero);
                should.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                res.body.links.one.should.match(/\boperation=add/);
                res.body.links.one.should.match(/\baction=number/);
                res.body.links.one.should.match(/\bnumber=1.2/);
                res.body.links.one.should.match(/\bdisplay=1/);
            })
            .expect(200, done);
    });

    it('should return display 2 when operation is add, number is 2 and number (2) command is pressed', function (done) {
        request(app)
            .get('/calculator?action=number&display=2&operation=add&number=2')
            .expect(function (res) {
                res.body.display.should.be.eql("2")
                should.not.exist(res.body.links.add);
                should.not.exist(res.body.links.subtract);
                should.not.exist(res.body.links.multiply);
                should.not.exist(res.body.links.divide);
                should.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.zero);
                should.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                should.exist(res.body.links.equal);
                res.body.links.zero.should.match(/\boperation=add/);
                res.body.links.zero.should.match(/\baction=number/);
                res.body.links.zero.should.match(/\bnumber=2/);
                res.body.links.zero.should.match(/\bdisplay=2/);
            })
            .expect(200, done);
    });

    it('should return display 0 when display is 1 and subtract (-) command is pressed', function (done) {
        request(app)
            .get('/calculator?action=subtract&display=1')
            .expect(function (res) {
                res.body.display.should.be.eql("0")
                should.not.exist(res.body.links.add);
                should.not.exist(res.body.links.subtract);
                should.not.exist(res.body.links.multiply);
                should.not.exist(res.body.links.divide);
                should.not.exist(res.body.links.zero);
                should.not.exist(res.body.links.equal);
                should.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                res.body.links.one.should.match(/\boperation=subtract/);
                res.body.links.one.should.match(/\baction=number/);
                res.body.links.one.should.match(/\bnumber=1/);
                res.body.links.one.should.match(/\bdisplay=1/);
            })
            .expect(200, done);
    });

    it('should return display 0 when display is 1 and multiply (*) command is pressed', function (done) {
        request(app)
            .get('/calculator?action=multiply&display=1')
            .expect(function (res) {
                res.body.display.should.be.eql("0")
                should.not.exist(res.body.links.add);
                should.not.exist(res.body.links.subtract);
                should.not.exist(res.body.links.multiply);
                should.not.exist(res.body.links.divide);
                should.not.exist(res.body.links.zero);
                should.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);
                res.body.links.one.should.match(/\boperation=multiply/);
                res.body.links.one.should.match(/\baction=number/);
                res.body.links.one.should.match(/\bnumber=1/);
                res.body.links.one.should.match(/\bdisplay=1/);
            })
            .expect(200, done);
    });

    it('should return display 0 when display is 1 and divide (/) command is pressed', function (done) { ///XXXXX
        request(app)
            .get('/calculator?action=divide&display=1')
            .expect(function (res) {
                res.body.display.should.be.eql("0")
                should.not.exist(res.body.links.add);
                should.not.exist(res.body.links.subtract);
                should.not.exist(res.body.links.multiply);
                should.not.exist(res.body.links.divide);
                should.not.exist(res.body.links.zero);
                should.not.exist(res.body.links.equal);
                should.exist(res.body.links.dot);
                should.exist(res.body.links.one);
                should.exist(res.body.links.two);
                should.exist(res.body.links.three);
                should.exist(res.body.links.four);
                should.exist(res.body.links.five);
                should.exist(res.body.links.six);
                should.exist(res.body.links.seven);
                should.exist(res.body.links.eight);
                should.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                res.body.links.one.should.match(/\boperation=divide/);
                res.body.links.one.should.match(/\baction=number/);
                res.body.links.one.should.match(/\bnumber=1/);
                res.body.links.one.should.match(/\bdisplay=1/);
            })
            .expect(200, done);
    });

    it('should return display 2 when display is 1, operation is add (+), number is 1 and equal (=) command is pressed', function (done) {
        request(app)
            .get('/calculator?action=equal&display=1&operation=add&number=1')
            .expect(function (res) {
                res.body.display.should.be.eql("2")
                should.exist(res.body.links.add);
                should.exist(res.body.links.subtract);
                should.exist(res.body.links.multiply);
                should.exist(res.body.links.divide);
                should.not.exist(res.body.links.dot);
                should.not.exist(res.body.links.one);
                should.not.exist(res.body.links.two);
                should.not.exist(res.body.links.three);
                should.not.exist(res.body.links.four);
                should.not.exist(res.body.links.five);
                should.not.exist(res.body.links.six);
                should.not.exist(res.body.links.seven);
                should.not.exist(res.body.links.eight);
                should.not.exist(res.body.links.zero);
                should.not.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);

                res.body.links.add.should.match(/\baction=/);
                res.body.links.add.should.match(/\bnumber=/);
                res.body.links.add.should.match(/\bdisplay=/);
            })
            .expect(200, done);
    });

    it('should return display 0 when display is 1, operation is subtract (-), number is 1 and equal (=) command is pressed', function (done) {
        request(app)
            .get('/calculator?action=equal&display=1&operation=subtract&number=1')
            .expect(function (res) {
                res.body.display.should.be.eql("0")
                should.exist(res.body.links.add);
                should.exist(res.body.links.subtract);
                should.exist(res.body.links.multiply);
                should.exist(res.body.links.divide);
                should.not.exist(res.body.links.dot);
                should.not.exist(res.body.links.one);
                should.not.exist(res.body.links.two);
                should.not.exist(res.body.links.three);
                should.not.exist(res.body.links.four);
                should.not.exist(res.body.links.five);
                should.not.exist(res.body.links.six);
                should.not.exist(res.body.links.seven);
                should.not.exist(res.body.links.eight);
                should.not.exist(res.body.links.zero);
                should.not.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);

                res.body.links.add.should.match(/\baction=/);
                res.body.links.add.should.match(/\bnumber=/);
                res.body.links.add.should.match(/\bdisplay=/);
            })
            .expect(200, done);
    });

    it('should return display 2 when display is 1, operation is multiply (*), number is 2 and equal (=) command is pressed', function (done) {
        request(app)
            .get('/calculator?action=equal&display=1&operation=multiply&number=2')
            .expect(function (res) {
                res.body.display.should.be.eql("2")
                should.exist(res.body.links.add);
                should.exist(res.body.links.subtract);
                should.exist(res.body.links.multiply);
                should.exist(res.body.links.divide);
                should.not.exist(res.body.links.dot);
                should.not.exist(res.body.links.one);
                should.not.exist(res.body.links.two);
                should.not.exist(res.body.links.three);
                should.not.exist(res.body.links.four);
                should.not.exist(res.body.links.five);
                should.not.exist(res.body.links.six);
                should.not.exist(res.body.links.seven);
                should.not.exist(res.body.links.eight);
                should.not.exist(res.body.links.zero);
                should.not.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);

                res.body.links.add.should.match(/\baction=/);
                res.body.links.add.should.match(/\bnumber=/);
                res.body.links.add.should.match(/\bdisplay=/);
            })
            .expect(200, done);
    });

    it('should return display 2 when display is 2, operation is divide (/), number is 4 and equal (=) command is pressed', function (done) {
        request(app)
            .get('/calculator?action=equal&display=2&operation=divide&number=4')
            .expect(function (res) {
                res.body.display.should.be.eql("2")
                should.exist(res.body.links.add);
                should.exist(res.body.links.subtract);
                should.exist(res.body.links.multiply);
                should.exist(res.body.links.divide);
                should.not.exist(res.body.links.dot);
                should.not.exist(res.body.links.one);
                should.not.exist(res.body.links.two);
                should.not.exist(res.body.links.three);
                should.not.exist(res.body.links.four);
                should.not.exist(res.body.links.five);
                should.not.exist(res.body.links.six);
                should.not.exist(res.body.links.seven);
                should.not.exist(res.body.links.eight);
                should.not.exist(res.body.links.zero);
                should.not.exist(res.body.links.nine);
                should.exist(res.body.links.clear);
                should.not.exist(res.body.links.equal);

                res.body.links.add.should.match(/\baction=/);
                res.body.links.add.should.match(/\bnumber=/);
                res.body.links.add.should.match(/\bdisplay=/);
            })
            .expect(200, done);
    });

})