$(function() {
    $(".change-eat").on("click", function(event) {
        // console.log(newBurger);
        var id = $(this).data("id");
        var newAte = $(this).data("newate");

        var newAteStatus = {
            devoured: newAte
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newAteStatus
        }).then(
            function() {
                console.log("change status", newAte);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: 0
        };

        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger

        }).then(
            function() {
                
                console.log("created new burger");
                location.reload();
            }
        );
    });
})