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
	var test = '';

		if (data.length >= 1) {
			for (var i = 0; i != data.length; i++) {
				data[i].splice(4,1,i)
					test += "<tr><td>"+data[i][0]+"</td><td>"+data[i][1]+"</td><td>"+data[i][2]
					+"</td><td>"+data[i][3]+"</td><td><button class='btn btn-primary' onclick='showUpdateForm("+data[i][4]+")'>Edit</button> <button class='btn btn-warning' onclick='deleteAction("+data[i][4]+")'>Delete</button></td></tr>";
			}
				document.getElementById('tbody').innerHTML = test;
		}
		else{
			document.getElementById('tbody').innerHTML = '<h1 style="text-align:center;">NO DATA FOUND</h1>';
		}
}

function deleteAction(count) {

	var ans = confirm("Are you sure?");

	if (ans) {
		data.splice(count,1)
		console.log(data);

		$("#addForm").trigger("reset");
		$("#updateForm").trigger("reset"); 
		$("#update").css('display','none');   
		showList();
	}
	else {
		return false;
	}
}


$(document).ready(function() {
	var count = 0;
		$("#addForm").submit(function(){
			event.preventDefault();
			var fname = $('input[name=first]').val();
			var lname = $('input[name=last]').val();
			var email = $('input[name=email]').val();
			var contact = $('input[name=contact]').val();


			for (var i = 0; i != data.length; i++) {
				if (email == data[i][2]) {
					alert("Email address has been taken. Please choose a different email");
					return false;
				}
			}

					data.push([fname,lname,email,contact,count]);
					count = data.length;
					console.log(data);

						showList();
						$("#addForm").trigger("reset");    
		});

		$("#updateForm").submit(function(){
			event.preventDefault();
			var fname = $('input[name=firste]').val();
			var lname = $('input[name=laste]').val();
			var email = $('input[name=emaile]').val();
			var contact = $('input[name=contacte]').val();
			var count = $('input[name=hidden]').val();

				console.log(data);
				data[count].splice(0,5,fname,lname,email,contact);

					showList();
					$("#updateForm").trigger("reset"); 
					alert("Update successful!");     
		});

		$("#hideForm1").click(function(){
			$("#add").css('display','none');
		});
		$("#hideForm2").click(function(){
			$("#update").css('display','none');
		});
});
