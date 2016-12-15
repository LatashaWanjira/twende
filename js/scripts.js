var named = new Array();
var numbered = new Array();
var locations = new Array();
var time = new Array();
var destination = new Array();
var space = new Array();

function insert() {
    var namedValue = document.getElementById('named').value;
    named[named.length] = namedValue;
    var numberedValue = document.getElementById('numbered').value;
    numbered[numbered.length] = numberedValue;
    var locationsValue = document.getElementById('location').value;
    locations[locations.length] = locationsValue;
    var timeValue = document.getElementById('time').value;
    time[time.length] = timeValue;
    var destinationValue = document.getElementById('destination').value;
    destination[destination.length] = destinationValue;
    var spaceValue = document.getElementById('space').value;
    space[space.length] = spaceValue;

}

function show() {
    var content = "<b>Drivers Details:</b><br>";
    for (var i = 0; i < named.length; i++) {
        content += named[i] + "<br>";
    };
    for (var i = 0; i < numbered.length; i++) {
        content += numbered[i] + "<br>";
    };

    for (var i = 0; i < locations.length; i++) {
        content += locations[i] + "<br>";
    };
    for (var i = 0; i < time.length; i++) {
        content += time[i] + "<br>";
    };
    for (var i = 0; i < destination.length; i++) {
        content += destination[i] + "<br>";
    };
    for (var i = 0; i < space.length; i++) {
        content += space[i] + "<br>";
    };
    document.getElementById('display').innerHTML = content;
};


$(document).ready(function() {
        $("#show").click

        function(show) {

        });
};







var driver = {
    name: "moses",
    route: "town service",
    time: "morning",
    rate: 80,
    contact: +254700000111
};
var driver1 = {
    name: "adelle",
    route: "burubur",
    time: "morning",
    rate: 90,
    contact: +254711104586
};


var driver2 = {
    name: "morio",
    route: "south c",
    time: "morning",
    rate: 90,
    contact: +254711145111
};



$(document).ready(function() {

    $("#ngong").click(function() {
        $("#ddetails").show();
    });
});

$(document).ready(function() {

    $("#south").click(function() {
        $("#ddetails").show();
    });
});

$(document).ready(function() {

    $("#buru").click(function() {
        $("#ddetails").show();
    });
});

$(document).ready(function() {
    $("#ngong").click(function() {
        document.write("<li>Name: " + driver1.name + "</li>" + "<li>Route: " + driver1.route + "</li>" + "<li>Time: " + driver1.time + "</li>" + "<li>Contact: " + driver1.contact + "</li>");
    });
});

$(document).ready(function() {
    $("#buru").click(function() {
        document.write("<li>Name: " + driver.name + "</li>" + "<li>Route: " + driver.route + "</li>" + "<li>Time: " + driver.time + "</li>" + "<li>Contact: " + driver.contact + "</li>");
    });
});


$(document).ready(function() {
    $("#south").click(function() {
        document.write("<li>Name: " + driver2.name + "</li>" + "<li>Route: " + driver2.route + "</li>" + "<li>Time: " + driver2.time + "</li>" + "<li>Contact: " + driver2.contact + "</li>");
    });
});

