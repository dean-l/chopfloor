$(document).ready(function(){
    
    $(".tile").find("a").each(function(){
    
        var array = ["8", "9", "a", "b", "c", "d", "e"];
        var color = "#" + array[Math.floor(Math.random() * 7)] + "0" + array[Math.floor(Math.random() * 7)] + "0" + array[Math.floor(Math.random() * 7)] + "0";
        $(this).css({"background-color": color});
        
        $(this).hover(function() {
            $(this).css("background-color","white")
        }, function() {
            $(this).css("background-color", color)
        }); 
        
        $(this).focusin(function() {
            $(this).css("background-color","white")
        });
    
    }); 

});