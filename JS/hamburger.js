$(function(){
    $("#cancel").hide();
    $("#hamburger").click(function(){
        $("#hamburger").hide();
        $("#cancel").show();
        $("#navigation-responsive").show();
        
        $("#cancel").click(function(){
            $("#hamburger").show();
            $("#cancel").hide();
            $("#navigation-responsive").hide();
        });
        
    });
});