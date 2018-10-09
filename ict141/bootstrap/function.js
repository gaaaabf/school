var data = [];
function showAddForm() {
	document.getElementById('update').style.display = "none" ;
	document.getElementById('add').style.display = "block" ;
	}
function showUpdateForm(count) {
	document.getElementById('add').style.display = "none" ;
	document.getElementById('update').style.display = "block" ;

	document.getElementById('efirst').value = data[count][0];
	document.getElementById('elast').value = data[count][1];
	document.getElementById('eemail').value = data[count][2];
	document.getElementById('econtact').value = data[count][3];

	document.getElementById('hidden').value = count;
	}

function showList() {
	console.log(data);
	var test = '';

	if (data.length >= 1) 
	{
		for (var i = 0; i != data.length; i++) {
			test += "<tr><td>"+data[i][0]+"</td><td>"+data[i][1]+"</td><td>"+data[i][2]
			+"</td><td>"+data[i][3]+"</td><td><button class='btn btn-primary' onclick='showUpdateForm("+data[i][4]+")'>Edit</button> <button class='btn btn-warning' onclick='deleteAction("+data[i][4]+")'>Delete</button></td></tr>";
		}
			document.getElementById('tbody').innerHTML = test;
	}
	else
	{
			document.getElementById('tbody').innerHTML = '<h1>NO DATA FOUND</h1>';
	}
}

function deleteAction(count) {
	data.splice(count,1)
	console.log(data);
	showList();
}


$(document).ready(function() {
	var count = 0;

	$("#addBtn").click(function(){
		console.log(data);
		var fname = $('input[name=first]').val();
		var lname = $('input[name=last]').val();
		var email = $('input[name=email]').val();
		var contact = $('input[name=contact]').val();

			// if ( fname == '' || lname == '' || email == '' || contact == '') 
			// {
			// 	alert("Please input value");
				
			// }
				data.push([fname,lname,email,contact,count]);
				count++;

					showList();
					$("#addForm").trigger("reset");
//         $('tbody').append("<tr><td>"+fname+"</td><td>"+lname+"</td><td>"+email
// +"</td><td>"+contact+"</td><td><button class='btn btn-primary' onclick='showUpdateForm("+count+")'>Edit</button> <button class='btn btn-warning' onclick='showUpdateForm("+count+")'>Delete</button></td></tr>");
// 		$("#addForm").trigger("reset");      
// 		$("#addForm").hide();       
		});

	$("#editBtn").click(function(){


		var fname = $('input[name=firste]').val();
		var lname = $('input[name=laste]').val();
		var email = $('input[name=emaile]').val();
		var contact = $('input[name=contacte]').val();
		var count = $('input[name=hidden]').val();

		console.log(count);

		data[count].splice(0,5,fname,lname,email,contact);

		showList();

		$("#updateForm").trigger("reset");      
		// $("#addForm").hide();            });
		// $("#updateBtn").click(function(){     // 
		});

});
