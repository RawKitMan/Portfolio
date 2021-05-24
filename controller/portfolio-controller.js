var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
let db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

    res.render("about-me");

});

router.get("/projects", function(req, res){
    db.Project.findAll({}).then(function (dbProjects) {
        console.log(dbProjects);
        res.render("portfolio", {dbProject: dbProjects})
        
    });
});

router.get("/submission", function(req, res){
    res.render("submission");
});

router.get("/signin", function(req, res){
    res.render("signin");
});

router.post("/api/projects", function (req, res) {
    db.Project.create(req.body).then(function (dbProject) {
        // Send back the ID of the new quote
        res.json({ id: dbProject.insertId });
    });
});

router.get("/api/projects", function(req, res) {
    db.Project.findAll({})
    .then(function(dbProjects){
        res.json(dbProjects);
    })
});

/*router.put("/api/projects/:id", function (req, res) {

    db.Project.update({
        where: {
            id: req.params.id
        }
    }).then(function (dbProject) {
        if (dbProject.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
*/
router.delete("/api/projects", function (req, res) {
    console.log('body', req.body)
    await db.Project.destroy({
        where: {
            id: req.body
        }
    }).then(function (dbProject) {
        if (dbProject.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            console.log(dbProject);
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
