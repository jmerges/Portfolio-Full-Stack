$(document).ready(function() {
    $.get("/api/projects/1", function(res) {
        console.log(res);
        console.log(res[0].name);
        $("#title1").html(res[0].name);
        $("#link1").html(res[0].link);
        $("#link1").attr("href", res[0].link);
        $("#description1").html(res[0].description);
        for (var i=0; i<res[0].Skills.length; i++) {
            var $li = $("<li class='text-white'>");
            $li.html(res[0].Skills[i].name);
            $("#list1").append($li);
        }
    });

    $.get("/api/projects/2", function(res) {
        console.log(res);

        $("#title2").html(res[0].name);
        $("#link2").html(res[0].link);
        $("#link2").attr("href", res[0].link);
        $("#description2").html(res[0].description);
        for (var i=0; i<res[0].Skills.length; i++) {
            var $li = $("<li class='text-white'>");
            $li.html(res[0].Skills[i].name);
            $("#list2").append($li);
        }
    });

    $.get("/api/projects/3", function(res) {
        console.log(res);

        $("#title3").html(res[0].name);
        $("#link3").html(res[0].link);
        $("#link3").attr("href", res[0].link);
        $("#description3").html(res[0].description);
        for (var i=0; i<res[0].Skills.length; i++) {
            var $li = $("<li class='text-white'>");
            $li.html(res[0].Skills[i].name);
            $("#list3").append($li);
        }
    });
});