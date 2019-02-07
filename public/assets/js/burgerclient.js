// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".eat_burger").on("click", function (event) {
    var burger = $(this).text().trim();
    var newEatState = {
      devoured: burger
    };
    // Send the PUT request.
    $.ajax("/burger/" + burger, {
      type: "PUT",
      data: newEatState
    }).then(
      function () {
        console.log("changed eat state to devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".new_burger").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#burger_name").val().trim()
    };
    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});