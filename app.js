var data = require("./server/data");

data.team.addTeam("Team1", "Team desc", "CI", "abc.png", function (err, team) {
    console.log(team);
});

//update update