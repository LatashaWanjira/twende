var driver = {
    name: "moses",
    route: "town service",
    time: "morning",
    rate: 80,
    contact: +254700000111
};

$(document).ready(function() {
    $("#karen").click(function() {
        $("#dereva").show();
    });
});

$(document).ready(function() {
    $("#cbd").click(function() {
        $("#dereva").show();
    });
});


$(document).ready(function() {
    $("#utawala").click(function() {
        $("#dereva").show();
    });
});

$(document).ready(function() {
    $("#runda").click(function() {
        document.write("<li>Name: " + driver.name + "</li>" + "<li>Route: " + driver.route + "</li>" + "<li>Time: " + driver.time + "</li>" + "<li>Contact: " + driver.contact + "</li>");
    });
});
