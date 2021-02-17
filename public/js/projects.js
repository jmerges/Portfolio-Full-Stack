$(document).ready(function() {
    var project1 = {
        name: "Coding Homepage",
        link: "https://github.com/michaelanthonyyy/aio-developer-homepage",
        description: "One-stop-shop for coders and coding enthusiasts to practice coding and healthy mental patterns."
    };

    function makeProjects() {
        $.post("/api/projects", project1)
            .then(data => {
                console.log(data);
        });

        var skill1 = {
            ProjectId: 1,
            name: "Leadership"
        };

        $.post("/api/skills", skill1)
            .then(data => {
                console.log(data);
        });
    }

    makeProjects();
});