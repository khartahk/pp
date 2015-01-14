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
    $(this).find("#btn-save").click(function(){
      console.log($('#datepickerFrom').val())
      DataJSON[rowId].values.push(
        {
          "from": $('#datepickerFrom').val(), 
          "to": $('#datepickerTo').val(), 
          "desc": "Id: " + rowId + "<br/>Name: " + $('#datepickerFrom').val() + " " + $('#datepickerTo').val(), 
          "label": $("#taskName").val()
        }
      );
      gantReload();
      $modal.modal('hide');
    });
  });
}