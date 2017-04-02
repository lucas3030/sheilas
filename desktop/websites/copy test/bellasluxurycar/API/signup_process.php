<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$username_email = test_input($_POST["username"]);
		$password = test_input($_POST["auth"]);
		$auth = create_hash($password);
		$usertype 	= $_POST["usertype"];
	}
						 
	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
						 
	
	//WRITE SQL TO INSERT RECORD
	$db->insertRecord( "Signup", array("username_Email", "password"), array( $username_email, $auth ) );
	

?>