// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//Sets server to pull up Handlebar pages.
let expresshb = require("express-handlebars");
app.engine("handlebars", expresshb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes accessed via controller and html route folder
const routes = require("./controllers/catsController.js");

app.use(routes);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});