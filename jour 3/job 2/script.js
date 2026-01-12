$(document).ready(function(){

    $("#shuffle").click(function(){
        let imgs = $("#container img").toArray().sort(() => 0.5 - Math.random());
        $("#container").empty().append(imgs);
        $("#result").empty();
        $("#message").text("");
    });

    $(document).on("click", "img", function(){
        $("#result").append($(this));
        checkOrder();
    });

    function checkOrder(){
        let correct = true;
        $("#result img").each(function(index){
            if($(this).data("order") != index+1){
                correct = false;
            }
        });

        if($("#result img").length == 6){
            if(correct){
                $("#message").text("Vous avez gagné").css("color","green");
            } else {
                $("#message").text("Vous avez perdu").css("color","red");
            }
        }
    }

});
