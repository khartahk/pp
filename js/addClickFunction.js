function saveModal (dt,rowId){
  console.log(DataJSON);
  DataJSON[rowId].values.push(
    {
      "from": $('#datepickerFrom').val(), 
      "to": $('#datepickerTo').val(), 
      "desc": "Id: " + (rowId+1) + "<br/>Name: " + $('#datepickerFrom').val() + " " + $('#datepickerTo').val(), 
      "label": $("#taskName").val()
    }
  );
  gantReload();
  $modal.modal('hide');
}

function addClickFunction(dt,rowId){
	var selectData = "";
	for(var i in DataJSON){
		selectData = selectData+'<option value="'+i+'">'+DataJSON[i].name+'</option>';
	}
	$( ".selectNames" ).html(selectData);

  $modal = $('#myModal');
	$modal.modal('show');
	$modal.on('shown.bs.modal', function () {
    $modal.focus();
    $("#btn-save").unbind('click').one('click',function(){
      saveModal(dt,rowId);
    })
  });
}

