// this will be mainly for appending and changing the information on the screen when the users clicks the various buttons//

$(document).ready(function() {
       
    $("li[name='about']").click(function() {
        var domElement = $("<div class='container' id='chickens'> <p>Woah look at this</p> </div>");
        $("#thatRow").html(domElement);
    });
    $("li[name='blog']").click(function() {
        var domElement = $('<p>Herds go</p>');
        $("#thatRow").html(domElement);
    });
    $("li[name='donate']").click(function() {
        var domElement = $('<p>Hero</p>');
        $("#thatRow").html(domElement);
    });
    
});