var db = require("../models");

module.exports = function(app) {
    app.get("/api/projects", function(req, res) {
        db.Project.findAll({
            include: [db.Skill]
        }).then(dbProjects => {
            res.json(dbProjects);
        });
    });

    app.get("/api/projects/:id", function(req, res) {
        db.Project.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Skill]
        }).then(dbProject => {
            res.json(dbProject);
        });
    });
};