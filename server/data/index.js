/*global process,module*/

var config = require('../config'),
    TeamData = require("./team")

module.exports = {
    team: new TeamData()
};

exports = module.exports;