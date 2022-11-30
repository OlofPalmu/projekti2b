$(function () {

  var $tasksList = $("#tasksList");
  var $taskInput = $("#taskInput");
  $("#container").animate({
      "margin-bottom" : "+=100px"
  }, 1000);


  $("#taskAdd").on("click", function () {
    if (!$taskInput.val()) {
      $taskInput.css("border", "solid 3px red");
      alert("Kirjoita tekstikenttään jotain!");
      return false;
    } else {
      $tasksList.append(
        "<li>" + "<button class='ready'>Valmis</button>" +
          $taskInput.val() +
          "<button class='delete'>Poista</button></li>"
      );
      $taskInput.css("border", "none");
    }
    $taskInput.val("");
    $tasksList.sortable();

    $(".ready").on("click", function(){
      $(this).parent("li").toggleClass("valmis");
  });

    $(".delete").on("click", function(){
      var $parent = $(this).parent();

      $tasksList.css("none");

      $parent.css("animation", "fadeOut .3s linear");
      setTimeout(function () {
        $parent.remove();
      }, 300);
    });
    });
    $taskInput.keyup(function(event){
        if(event.keyCode == 13){
            $("#taskAdd").click();
        }
    });
});

