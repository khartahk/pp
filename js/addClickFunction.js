function addClickFunction(dt,rowId){
	var selectData = "";
	for(var i in DataJSON){
		selectData = selectData+'<option value="'+i+'">'+DataJSON[i].name+'</option>';
	}

	$( ".selectNames" ).html(selectData);

  $modal = $('#myModal');
	$modal.modal('toggle');
	$modal.on('shown.bs.modal', function () {
    $modal.focus();
    $modal.find(".btn.btn-primary").click(function(){
      console.log(DataJSON,rowId);
      $modal.modal('hide')
    });
  });
}