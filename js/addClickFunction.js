function addClickFunction(){
	$('#myModal').modal('toggle');
	$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').focus();
  	})
}