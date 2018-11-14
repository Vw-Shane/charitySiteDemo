// this will be mainly for appending and changing the information on the screen when the users clicks the various buttons//

$(document).ready(function() {
       
    $("li[name='about']").click(function() {
        var domElement = $("<div class='container' id='chickens'> <h2>About Us</h2> <p>The Kingiti School Scholarship and Village Health Outreach Fund, aka The Kingiti Fund, is a 501(c)(3) non-profit organization consisting of project directors in the US and Tanzania that work together in the implementation of education, public health, and medical projects in central Tanzania. Our board members and US partners work for the organization strictly on a volunteer basis.  Below are brief descriptions of our project directors: </p> <img src='./images/abtUs1.jpg'> <p> Ben Belknap was a Peace Corps Tanzania volunteer living in Kingiti village from 2007-2009.  As the village’s first volunteer, he was in a unique position to start projects confronting a number of village issues.  His projects ranged from those focused on food production and village-based income generation to HIV/AIDS education and medical care. He co-founded The Kingiti Fund in 2008. Ben is currently an Emergency Medicine resident physician in Brooklyn, New York. He serves as a director, board member, and translator for The Kingiti Fund.</p> <br><br><br><br> <br><br>  <img src='./images/abtUs2.jpg'> <p> Matayo Oweya is The Kingiti Fund’s public health and medical project director. Matayo lives in Mpwapwa town and operates a small business in the local market. He is a long time Peace Corps volunteer fixer and general information guru in the district. Matayo is working with the Mpwapwa District Medical Officer and the hospital leadership at the Mpwapwa District Hospital to improve medical services in the district.</p> </div>");
        $("#thatRow").html(domElement);
    });
    $("li[name='blog']").click(function() {
        var domElement = $('<p>Herds go</p>');
        $("#thatRow").html(domElement);
    });
    $("li[name='donate']").click(function() {
        var domElement = $('<img src= "./images/demoPayPal.png" id="payPal">');
        $("#thatRow").html(domElement);
    });
    
});