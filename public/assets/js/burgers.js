$(function() {
    $(".change-eat").on("click", function(event) {
        var id = $(this).data("id");
        var newAte = $(this).data("newate");

        var newAteStatus = {
            devoured: newAte
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newAteStatus
        }).then

    }
}