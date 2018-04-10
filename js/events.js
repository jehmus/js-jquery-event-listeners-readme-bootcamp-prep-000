//define functions here

function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $(document).on("load", function() {
    $("img").addClass("tasty")
  })
}

function pressIt(){
  $("input").on("keydown", function(key) {
    if (key.which==71) {
      alert("You pressed the G key!")
    }
  })
}

function submitIt() {
  $("form")
}


$(document).ready(function(){

// call functions here

});
