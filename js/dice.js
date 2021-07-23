$(document).ready(function(){
    var run = false;
    
    $(":checked").parent().css("background-color","white"); 
    
    $(".tile").find("label").each(function(){
        $(this).click(function() {
            
            $("input").parent().css("background-color", "coral");
            $(":checked").parent().css("background-color","white"); 
            
            
            if (run == false) {
                run = true;
            } else {
                diceRoll();
                run = false;
            }
        })       
    
    }); 
    
    $(this).click(function() {
        
    });
	
	function diceRoll(){
        var dice = $('input[name=type]:checked', '#dice_type').val(); 
        var number = $('input[name=count]:checked', '#dice_count').val();
        var total = 0;
        var html1 = "";
        var html2 = "";
        var html3 = "";
        html1 = html1 + '<div class="result">';
        for (i=0; i<number; i++) {
            var result = Math.ceil(Math.random() * (dice))
            html2 = html2 + '<div class="dice"><p>' + result + "</p></div>";
            total = total + Number(result);
        }
        html3 = html3 + '<div class="total"><p> Total = ' + total + "</p></div>";
        $("#result-frame").prepend(html1 + html2 + html3);
        
    }
});
