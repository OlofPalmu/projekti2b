$(function () {
  // Helpotetaan työtä tekemällä muuttujat ID:stä
  var $tehtäväLista = $("#tehtäväLista");
  var $tehtäväInput = $("#tehtäväInput");

  $("#container").animate({
      "margin-bottom" : "+=100px"
  }, 1000);

  // Tehdään funktio jolla luodaan uusi elementti sivulle.
  $("#uusiTodo").on("click", function () {
    if (!$tehtäväInput.val()) {
      $tehtäväInput.css("border", "solid 3px red");
      alert("Kirjoita tekstikenttään jotain!");
      return false;
    } else {
      $tehtäväLista.append(
        "<li><button class='ready'>Valmis</button>" +
          $tehtäväInput.val() +
          "<button class='delete'>Poista</button></li>"
      );
      $tehtäväInput.css("border", "none");
    }

    // Nollataan teksikentän arvo ja tehdään sivun elementeistä siirreltäviä.
    $tehtäväInput.val("");
    $tehtäväLista.sortable();
    
    // Luodaan "Valmis napille toiminto, jolla saadaan tehtävä merkittyä tehdyksi
    $(".ready").on("click", function(){
      var $tehtäväValmis = $(this).parent();
      $tehtäväValmis.toggleClass("valmis");
  });

  // Luodaan "Poista" napille toiminto, jolla poistetaan kyseinen elementti.
    $(".delete").on("click", function(){
      var $tehtäväPoisto = $(this).parent();
      $tehtäväPoisto.css("animation", "fadeOut .3s linear");
      setTimeout(function () {
        $tehtäväPoisto.remove();
      }, 300);
    });
    });

    // Luodaan toiminto myös enter-näppäimelle
    $tehtäväInput.keyup(function(event){
        if(event.keyCode == 13){
            $("#uusiTodo").click();
        }
    });
});

