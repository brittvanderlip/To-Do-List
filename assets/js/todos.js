//click only adds listeners for existing elements, on adds listeners for all potential future elements
//Check off specific todos by clicks
$("ul").on("click", "li", function(){
  $(this).toggleClass("checkOff");
});

//Delete todo by clicking on trash
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove(); //Remove parent elements of the span that was clicked on
  });
  event.stopPropagation(); //Stop event from bubbling
});

//Create New todos
$("input[type='text']").keypress(function(event){
  //When user presses "Enter" key
  if(event.which === 13){
    //Extract new todo from input
    var newTodo = $(this).val();
    //Clear input
    $(this).val("");
    //Create new li and add to ul using append
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ newTodo +"</li>");

  }
});

//Clicking + icon, input fade in and out
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
