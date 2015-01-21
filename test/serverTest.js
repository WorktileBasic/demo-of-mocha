/*global process,require,describe,it,console,before,after,beforeEach,afterEach*/


var assert = require("assert"),
    database = require("./database"),
    config = require("../server/config");

describe('#Server Test', function () {
    after(function (done) {
        database.clearTestData(function () {
            done();
        });
    });

    require("./data");
});
