/*global module*/
var util = require("util");

var Team = function () {
    var self = this;

    Team.prototype.addTeam = function (name, desc, domain, logo, callback) {
        console.log(abc);
        return callback(null, {
            name  : name,
            desc  : desc,
            domain: domain,
            logo  : logo,
            id    : "11111"
        });
    };

    Team.prototype.updateTeam = function (id, name, desc, domain, logo, callback) {
        return callback(null, {
            name  : name,
            desc  : desc,
            domain: domain,
            logo  : logo,
            id    : id
        });
    };

    Team.prototype.removeTeam = function (id, callback) {
        return callback(null, {
            id        : id,
            is_deleted: 1
        });
    };
};

exports = module.exports = Team;