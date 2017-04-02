<?php

         //BRING UTILITIES 
		 include_once("utilities/utilities.php");
		 //ESTABLISH DB CONNNECTION
		 include_once("obj/dbcon.php");
		 
		 $result = array();
		 $db = new dbCon();
		 
		 $intention =  $_POST["intention"];
		 
		 switch( $intention ){
			 case "newuser":
				include_once("signup_process.php");
				$result['status'] = "complete";
			 	break;
			case "carowner":
			
				break;
		}
		
		echo json_encode( $result );
		 
       
		 
      ?>

<?php

         //BRING UTILITIES 
		 include_once("utilities/utilities.php");
		 //ESTABLISH DB CONNNECTION
		 include_once("obj/dbcon.php");
		 
		 $result = array();
		 $db = new dbCon();
		 
		 $intention =  $_POST["intention"];
		 
		 switch( $intention ){
			 case "carowners":
				include_once("carowners.php");
				$result['status'] = "complete";
			 	break;
			case "carowner":
			
				break;
		}
		
		echo json_encode( $result );
		 
       
		 
      ?>