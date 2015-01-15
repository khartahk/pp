function reloadDevs(){
	varDevs = "";
	for(var i in DataJSON){
		varDevs = varDevs+'<a href="#" class="removeDev" style="color:black;text-decoration:none"><strong>'+DataJSON[i].name+'</strong/>&nbsp;&nbsp;&nbsp;<span style="color:red">X</span></a>';
	}
	$("#developersList").html(varDevs);
}

$( "#addDev" ).click(function(){
  	$modal = $('#devModal');
	$modal.modal('show');
	$("#developerName").val("");
	$("#developerType").val("");
});



$( "#btn-save-add-dev" ).click(function(){
	var newDev = $("#developerName").val();
	var newDevType = $("#developerType").val();
	var value = { "name": newDev,
				    "desc": newDevType,
				    "values":[]};
	  
	DataJSON.push(value);

	gantReload();
	$modal = $('#devModal');
	$modal.modal('hide');
});


$( document ).on("click", "#developersList a.removeDev", function(event) {
	//delete favorites.favorites[1].items[1]
	event.preventDefault();
	console.log($(this));
	console.log($(this).index());
	var currentIndex = $(this).index();
	DataJSON.splice(currentIndex,1);
	//delete DataJSON[currentIndex];
	gantReload();
	//console.log(DataJSON);

});