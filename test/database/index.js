/*global require,module,exports,console*/

var teams = require("./team"),
    data = require("../../server/data"),
    async = require("async"),
    config = require("../../server/config"),
    _ = require("lodash");

(function () {
    "use strict";
    exports.clearTestData = function (done) {
        //clear the test data in DB;
        done();
    };

    exports.createTestData = function (done) {
        exports.clearTestData(function () {
            async.parallel([
                    function (callback) {
                        //init the test data of team
                        callback(null);
                    }
                ],
                function (err) {
                    done();
                });
        });
    };

    exports.beforeCreateData = function (done) {
        //do some logic, such as clear the test data
        exports.createTestData(function () {
            return done();
        });
    }
})();


