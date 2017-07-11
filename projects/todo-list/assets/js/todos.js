// Click off specific todos by clicking
$("ul").on("click", "li", function() {
	/* Originally had li as the selector, but you can only apply
	the "on" to future events IF the events already exist on the 
	page, so we added it to the parent of li => ul.
		- The 2nd parameter specifies that the code should only be run
			if an li was clicked.
	*/
	// toggle gray/strikethrough on/off
	// You have to compare it against RGB, otherwise it won't work.
	$(this).toggleClass("completed");
});

// Click on X to delete 
$("ul").on("click", "span", function(event) {
	// Get the parent and remove it.. otherwise you remove the span. this = <span>
	$(this).parent().fadeOut(500,function() {
		$(this).remove(); // This is not the same this as the above line. this = <li>
	});
	//capture the event and stop it from propagating up the parent elements.
});

$("input[type='text']").keypress(function(event) {
	// Check for enter key.
	if(event.which === 13) {
		//get text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li to add to the todo list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); 
	}
})

$(".fa-pencil-square-o").click(function() {
	$("input[type='text']").slideToggle();
});