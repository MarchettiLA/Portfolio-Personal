<?php
 
if($_POST) {
    $nombre = "";
    $mail = "";
    $asunto = "";
    $mensaje = "";
     
    if(isset($_POST['nombre'])) {
      $visitor_name = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['mail'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['mail']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }
     
    if(isset($_POST['asunto'])) {
        $email_title = filter_var($_POST['asunto'], FILTER_SANITIZE_STRING);
    }
     
     
    if(isset($_POST['mensaje'])) {
        $visitor_message = htmlspecialchars($_POST['mensaje']);
    }

        $recipient = "lautaroamarchetti@gmail.com";
    
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
     
    if(mail($recipient, $asunto, $mensaje, $headers)) {
        echo "<p>Thank you for contacting us, $nombre. You will get a reply within 24 hours.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
 
?>