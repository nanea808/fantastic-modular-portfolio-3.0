const { Project } = require("../models");

module.exports = {
    getProjects(req, res) {
        Project.find()
            .then((projects) => res.json(projects))
            .catch((err) => res.status(500).json(err));
    },
    createProject(req, res) {
        Project.create(req.body)
            .then((project) => res.json(project))
            .catch((err) => res.status(500).json(err));
    }
}