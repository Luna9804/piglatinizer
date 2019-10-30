console.log("hi");

$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("#button").click(function(){
    let word=
$(".input").val();
//you would need to write the rest of the function
$(".output").text(word);
console.log(word);

})

});
