<?php

	$name = $_POST['name'];
  $email = $_POST['email'];
  $text = $_POST['text'];
  $to = "silva.castro.mony@gmail.com";
  $subject = 'Message from Local 10 Site ';

  $message = "From: $name\n E-Mail: $email\n Message:\n $text";
  
  $message = str_replace("\n.", "\n..", $message);
  
  $headers = 'From: silva.castro.mony@gmail.com' . "\r\n" .
    'Reply-To: silva.castro.mony@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  $success = mail($to, $subject, $message, $headers);
  if(!$success) {   
       echo "Error";   
  } else {
      echo file_get_contents("contactanos2.html");
  }
  
	header('Location: contactanos.html');

?>
