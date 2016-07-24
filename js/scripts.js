


var items = ["item1", "item2", "item3", "item4"];
var purchaseOrder=[];
	$("form#purchaseOrder").submit(function(event) {
	//
	// 	items.forEach(function(item) {
	// 	// debugger;
	// 		// purchaseOrder = .push($("#" + item).val());
	// 	purchaseOrder = items.push(item);
	// 		event.preventDefault();
	// 	});
	// 	console.log(purchaseOrder);
	// 	console.log(items);
	// });


	var purchaseOrder = items.map(function(item){
			return $("#" + item).val().toUpperCase();
	});
	purchaseOrder.sort();
	purchaseOrder.forEach(function(order){
		$("ul.display").append("<li>" + order + "</li>");
	});
	$("h2.alphabet").toggle();
	event.preventDefault();
});

//
// var name = function(text1, text2) {
// 	return text1 + text2;
// };
//
// $(document).ready(function() {
// 	$("form#name").submit(function(event) {
//   	  event.preventDefault();
// 			var contactInfo = [Fname, Lname, Email, Address];
// 			contactInfo.foreach(function(element){
// 				var inputInfo = element;
// 				$("." + element).text(inputInfo);
// 			});
//
//
//   		var nameFirst = $("#Fname").val();
//   		var nameLast = $("#Lname").val();
//   		var result = nameFirst + " " +nameLast;
//       var result1 = $("#Email").val();
//       var result2 = $("#Address").val();
//   		$("#output").text(result);
//       $("#emailout").text(result1);
//       $("#addressout").text(result2);
//       console.log ("hey")
// 	});
// });
