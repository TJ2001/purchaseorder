var name = function(text1, text2) {
	return text1 + text2;
};

$(document).ready(function() {
	$("form#name").submit(function(event) {
  	  event.preventDefault();
  		var nameFirst = $("#Fname").val();
  		var nameLast = $("#Lname").val();
  		var result = nameFirst + " " +nameLast;
      var result1 = $("#Email").val();
      var result2 = $("#Address").val();
  		$("#output").text(result);
      $("#emailout").text(result1);
      $("#addressout").text(result2);
      console.log ("hey")
	});
});
