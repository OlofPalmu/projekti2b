$(function () {

  var $tasksList = $("#tasksList");
  var $taskInput = $("#taskInput");

  $("#taskAdd").on("click", function () {
    if (!$taskInput.val()) {
      $taskInput.css("border", "solid 3px red");
      alert("Kirjoita tekstikenttään jotain!");
      return false;
    } else {
      $tasksList.append(
        "<li>" +
          $taskInput.val() +
          "<button class='delete'>Poista</button></li>"
      );
      $taskInput.css("border", "none");
    }
    $taskInput.val("");

    $(".delete").on("click", function () {
      var $parent = $(this).parent();

      $tasksList.css("none");

      $parent.css("animation", "fadeOut .3s linear");
      setTimeout(function () {
        $parent.remove();
      }, 300);
    });
    });
});
