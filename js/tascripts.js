/* global $ */

$(document).ready(function() {
    $("#formnewsletter").submit(function(e){
        
        // prevents the page from reloading after submitting the form 
        // (cf. http://api.jquery.com/event.preventDefault/)
        e.preventDefault();                     
        
        // hide the form and then show the "Thank you" message
        $("#formnewsletter").fadeOut("fast");
        $("#newsletterthankyou").html("Thank you for registering!").hide().delay(400).fadeIn();
            // the chaining of jquery functions is explained at http://www.w3schools.com/jquery/jquery_chaining.asp
    });
});
