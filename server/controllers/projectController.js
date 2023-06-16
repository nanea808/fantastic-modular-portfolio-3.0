const { Project } = require("../models");

module.exports = {
    getProjects: async (req, res) => {
        try {
            const projects = await Project.find();
            res.json(projects);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    createProject: async (req, res) => {
        // Project.create(req.body)
        //     .then((project) => res.json(project))
        //     .catch((err) => res.status(500).json(err));
        try {
            const project = await Project.create(req.body);
            res.json(project);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}