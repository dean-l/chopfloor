$(document).ready(function(){
    $(".desc").hide();
    $(".skill").click(function(){
        if($(this).children(".desc").css("display") == "none"){
            $(this).children(".desc").css("display", "block");
        } else {
            $(this).children(".desc").css("display", "none");
        }
    });
    $(".addBtn").click(function(){
        var mySkill = $(this).parent().parent().html();
        var newSkill = mySkill.replace('addBtn">Add to my List', 'removeBtn">Remove from my List');
        $(".myList").after('<div class="skill">' + newSkill + '</div>');
    });
});
$(document).on("click", ".removeBtn", function(){
    $(this).parent().parent().remove();
});