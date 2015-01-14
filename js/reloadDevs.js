function reloadDevs(){
	console.log(DataJSON);
	varDevs = "";
	for(var i in DataJSON){
		varDevs = varDevs+'<li><strong>'+DataJSON[i].name+'</strong/>&nbsp;&nbsp;&nbsp;<a href="#" class="removeDev" style="color:red;text-decoration:none">X</a></li>';
	}
	$("#developersList").html(varDevs);
}

$( "#addDev" ).click(function() {
  	$modal = $('#devModal');
	$modal.modal('show');
});