var data = [];
// function showAddForm() {
// 	document.getElementById('pakita').innerHTML ='<form method="post" id="addForm">'+
// 			'<h3>Add Data</h3>'+
// 				'<div class="form-row align-items-center">'+
// 					'<div class="col-sm-3 my-1">'+
// 						'<label class="col-sm-2 col-form-label">First</label>'+
// 						'<input type="text" class="form-control" id="ffirst" name="first" required>'+
// 					'</div>'+
// 					'<div class="col-sm-3 my-1">'+
// 						'<label class="col-sm-2 col-form-label">Last</label>'+
// 						'<input type="text" class="form-control" name="last" required>'+
// 					'</div>'+
// 				'</div>'+
// 				'<div class="form-row align-items-center">'+
// 					'<div class="col-sm-3 my-1">'+
// 						'<label class="col-sm-2 col-form-label">Email</label>'+
// 						'<input type="email" class="form-control" name="email" required>'+
// 					'</div>'+
// 					'<div class="col-sm-3 my-1">'+
// 						'<label class="col-sm-2 col-form-label">Contact</label>'+
// 						'<input type="text" class="form-control" name="contact" required>'+
// 					'</div>'+
// 				'</div>'+
// 				'<br>'+
// 				'<input type="submit" class="btn btn-primary" id="addBtn" value="Submit">'+
// 			'</form>'
// }



function showAddForm() {
	document.getElementById('update').style.display = "none" ;
	document.getElementById('add').style.display = "block" ;
	}
function showUpdateForm(count) {
	document.getElementById('add').style.display = "none" ;
	document.getElementById('update').style.display = "block" ;

	document.getElementById('efirst').value = data[count-4];
	document.getElementById('elast').value = data[count-3];
	document.getElementById('eemail').value = data[count-2];
	document.getElementById('econtact').value = data[count-1];

	document.getElementById('hidden').value = data[count];

	}

// function showUpdateForm(count) {
// 	console.log(data[count]);
// 	document.getElementById('pakita').innerHTML = '<form method="GET" id="updateForm">'+
// 			'<h3><br>Edit Data</h3>'+
// 			'<div class="form-row align-items-center">'+
// 				'<div class="col-sm-3 my-1">'+
// 					'<label class="col-sm-2 col-form-label">First</label>'+
// 					'<input type="text" class="form-control" value="'+data[count-4]+'" name="firste">'+
// 				'</div>'+
// 				'<div class="col-sm-3 my-1">'+
// 					'<label class="col-sm-2 col-form-label">Last</label>'+
// 					'<input type="text" class="form-control" value="'+data[count-3]+'" name="laste">'+
// 				'</div>'+
// 			'</div>'+
// 			'<div class="form-row align-items-center">'+
// 				'<div class="col-sm-3 my-1">'+
// 					'<label class="col-sm-2 col-form-label">Email</label>'+
// 					'<input type="email" class="form-control" value="'+data[count-2]+'" name="emaile">'+
// 				'</div>'+
// 				'<div class="col-sm-3 my-1">'+
// 					'<label class="col-sm-2 col-form-label">Contact</label>'+
// 					'<input type="text" class="form-control" value="'+data[count-1]+'" name="contacte">'+
// 				'</div>'+
// 			'</div>'+
// 			'<br>'+
// 			'<input type="button" class="btn btn-primary" id="editBtn" value="Submit">'+
// 		'</form>'
// 	// data.splice(count,4,'test','test');
// }

$(document).ready(function() {
	var count = 0;

	$("#addBtn").click(function(){

		var fname = $('input[name=first]').val();
		var lname = $('input[name=last]').val();
		var email = $('input[name=email]').val();
		var contact = $('input[name=contact]').val();

		data.push(fname,lname,email,contact);
		count+=4;


        $('tbody').append("<tr><td>"+fname+"</td><td>"+lname+"</td><td>"+email
+"</td><td>"+contact+"</td><td><button class='btn btn-primary' onclick='showUpdateForm("+count+")'>Edit</button> <button class='btn btn-warning' onclick='showUpdateForm("+count+")'>Delete</button></td></tr>");
		$("#addForm").trigger("reset");      
		// $("#addForm").hide();            });
		// $("#updateBtn").click(function(){     // 
		});

	$("#editBtn").click(function(){

		var fname = $('input[name=firste]').val();
		var lname = $('input[name=laste]').val();
		var email = $('input[name=emaile]').val();
		var contact = $('input[name=contacte]').val();
		var count = $('input[name=hidden]').val();
		var tsk = $(this).data('row');
			console.log(tsk);
		data.splice(count,4,fname,lname,email,contact);

        $('tbody').append("<tr><td>"+fname+"</td><td>"+lname+"</td><td>"+email
+"</td><td>"+contact+"</td><td><button class='btn btn-primary' onclick='showUpdateForm("+count+")'>Edit</button></td></tr>");
		$("#addForm").trigger("reset");      
		// $("#addForm").hide();            });
		// $("#updateBtn").click(function(){     // 
		});

});
