function saveModal (dt,rowId){
  var value = {
    "from": $('#datepickerFrom').val(), 
    "to": $('#datepickerTo').val(), 
    "desc": "Id: " + (rowId+1) + "<br/>Name: " + $('#datepickerFrom').val() + " " + $('#datepickerTo').val(), 
    "label": $("#taskName").val(),
    "dt":dt,
    "rowId":rowId,
    "dataObj":{}
  }
  value.dataObj = value;
  DataJSON[rowId].values.push(value);
  gantReload();
  $modal.modal('hide');
}

function addClickFunction(dt,rowId){
	var selectData = "";
	for(var i in DataJSON){
		selectData = selectData+'<option value="'+i+'">'+DataJSON[i].name+'</option>';
	}
	$( ".selectNames" ).html(selectData);
  // $('#datepickerFrom').datepicker("setDate", Date(dt/1000) );
  $modal = $('#myModal');
	$modal.modal('show');
	$modal.on('shown.bs.modal', function () {
    $modal.focus();
    $("#btn-save").unbind('click').one('click',function(){
      saveModal(dt,rowId);
    })
  });
}

function editModal (data){
  $('#datepickerFrom').val(data.from), 
  $('#datepickerTo').val(data.to), 
  $('#taskDescription').val(data.desc), 
  $("#taskName").val(data.label)
}

function editSaveModal (dt,rowId){
  var value = {
    "from": $('#datepickerFrom').val(), 
    "to": $('#datepickerTo').val(), 
    "desc": "Id: " + (rowId+1) + "<br/>Name: " + $('#datepickerFrom').val() + " " + $('#datepickerTo').val(), 
    "label": $("#taskName").val(),
    "dt":dt,
    "rowId":rowId,
    "dataObj":{}
  }
  value.dataObj = value;
  DataJSON[rowId].values.push(value);
  gantReload();
  $modal.modal('hide');
}

function editClickFunction(data){
  var selectData = "";
  for(var i in DataJSON){
    selectData = selectData+'<option value="'+i+'">'+DataJSON[i].name+'</option>';
  }
  $( ".selectNames" ).html(selectData);
  $modal = $('#myModal');
  $modal.modal('show');
  $modal.on('shown.bs.modal', function () {
    $modal.focus();
    editModal(data);
    console.log(data)
    $("#btn-save").unbind('click').one('click',function(){
      editSaveModal(data.dt,data.rowId);
    })
  });
}