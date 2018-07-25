$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var status = $(this).data("devour");
  
      var newDevouredState = {
        devoured: status
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured status to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted");
          location.reload();
        }
      )
    })
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  