// JavaScript Document

$(document).ready( function(){
	console.log("ready");
	
	
	$("#signupbtn").click(function(){
		var Email_username = $("#Email_Username").val();
		var password = $("#password").val();
		var usertype = $("input[name='usertype']").val();
		
		console.log( Email_username)
		console.log(password )
		console.log( usertype)
		
		var dataToTransmit = { intention: "newuser", username : Email_username, auth : password, usertype : usertype };
		
		$.post("api/action_page.php", dataToTransmit ).done( function( response ){ 
			console.log( response )
		});
	});
		
	$("#carownerbtn").click(function(){
		var First_name = $("#First_name").val();
		var Last_name = $("#Last_name").val();
		var Email = $("Email").val();
		var Email = $("Phone").val();
		var Make = $("#Make").val();
		var Model = $("#Model").val();
		var Year = $("Year").val();
		var Weekly_Rental_Prices = $("#Weekly_Rental_Prices").val();
		var Availability = $("#Availability").val();
		
		
		console.log( First_name)
		console.log(Last_name )
		console.log( Email)
		console.log(Phone )
		console.log( Make)
		console.log(Model)
		console.log( Year)
		console.log(Weekly_Rental_Prices)
		console.log(Availability)
		
		
		
		var dataToTransmit = { intention: "carowners", username : First_name, username : Last_name, Email : Email , Phone:Phone, Make: Make, Model:Model,Year:Year,Weekly_Rental_Prices:Weekly_Rental_Prices:Availability:Availability};
		
		$.post("api/action_page.php", dataToTransmit ).done( function( response ){ 
			console.log( response )
		});
	});
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	/*$("#submitData").click( function(){
		var Email_username = $("#userInput").val();
		var password = $("#userInput2").val();
		$rdb_value = $_POST['driver'];
		$rdb_value = $_POST['owner'];
		var dataToTransmit = { intention: "insertARecord", d1 : data1, d2: data2, d3: data3 }

		// console.log( userInput )
		// console.log( userInput2 )
		// console.log( data3 )

		$.post("api/signup.php", dataToTransmit ).done( function( response ){ 
			console.log( response )
		})

	});
	
		$("#searchData").click( function(){
		var searchKey = $("#searchKey").val();

		var dataToTransmit 	= { intention: "selectARecord", d4: searchKey }
		

		$.post("api/", dataToTransmit ).done( function( response ){
			console.log( response )

			obj = JSON.parse( response )

			console.log( obj.status )

			console.log( obj.data[0] )

			$("#displayData").html( obj.data[0][0] + "-" + obj.data[0][1])
		})
	})
	
*/
	
		
	





})