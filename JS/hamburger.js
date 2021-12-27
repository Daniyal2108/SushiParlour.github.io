$(function(){

    $("#hamburger").click(function(){
        $("#navigation-responsive").slideToggle();
        
    
    });
    
    if(x.matches){
        location.reload(); 
    }
    var x = window.matchMedia("(min-width:992px)");
    
});