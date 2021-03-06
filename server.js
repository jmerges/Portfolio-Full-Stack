var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    
db.Project.create({
  link: "https://github.com/michaelanthonyyy/aio-developer-homepage",
  name: "Programmer Home Page",
  description: "For this project, I worked with Michael Medina and Ryan Kirkland to create a coding homepage."
}).then(() => {
  db.Skill.create({
    name: "Leadership",
    ProjectId: 1
  });
  
  db.Skill.create({
    name: "Group dynamics",
    ProjectId: 1
  });
  
  db.Skill.create({
    name: "Page Design",
    ProjectId: 1
  });
}).then(() => {
  db.Project.create({
    link: "https://github.com/jmerges/weather-dashboard",
    name: "Weather Dashboard",
    description: "This application searches for a city's weather data and displays it on the screen. It also forecasts the next 5 days for the city."
  }).then(() => {
    db.Skill.create({
      name: "API requests",
      ProjectId: 2
    });

    db.Skill.create({
      name: "JQuery",
      ProjectId: 2
    });
  }).then(() => {
    db.Project.create({
      link: "https://github.com/jmerges/County-Election-Results-Project",
      name: "County Election Results",
      description: "This project compares a searched county's presidential election results with its demographic statistics for the last 20 years."
    }).then(() => {
      db.Skill.create({
        name: "Chart JS",
        ProjectId: 3
      });
      
      db.Skill.create({
        name: "Node",
        ProjectId: 3
      });
      
      db.Skill.create({
        name: "Sequelize",
        ProjectId: 3
      });
      
      db.Skill.create({
        name: "Advanced API requests",
        ProjectId: 3
      });
    });
  });
});
  });
});
