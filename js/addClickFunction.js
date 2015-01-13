function addClickFunction(){

	var selectData = "";
	for(var i in DataJSON){
		selectData = selectData+'<option value="'+i+'">'+DataJSON[i].name+'</option>';
	}

	$( ".selectNames" ).html(selectData);

	$('#myModal').modal('toggle');
	$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').focus();
  	})
}