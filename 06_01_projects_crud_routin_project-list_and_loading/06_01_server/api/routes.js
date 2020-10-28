const routes = require('express').Router();
const data = require('../db/db.json');

const findByProjectId = (id, cb) => {
	if (!data.projects[id]) {
		return cb(new Error('No Matching Id' + id));
	}

	return cb(null, data.projects[id]);
};

// Get a list of all projects
routes.get('/projects', (req, res) => {
	res.status(200).json(data.projects);
});

// find a project by id
routes.get('/projects/:id', (req, res, next) => {
	const id = req.params.id;

	findByProjectId(id, (error, project) => {
		if (error) {
			return next(error);
		}
		return res.status(200).json(project);
	});
});

module.exports = routes;