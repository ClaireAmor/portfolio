<?php
    $name = $_POST['name'];
    $visitor_email = $_POST["email"];
    $message = $_POST["message"];


    $objetEmail = 'New TESSSSSSSSSSSSST';

    $email_body = "User Name: $name. \n". "User Email : $visitor_email.\n".
                    "User Message : $message.\n";

    $to = "claire.amor@outlook.fr";

    $headers = "From: $my_email \r\n";
    $headers = "Reply-to: $visitor_email \r\n"; 

    mail($to,$objetEmail, $email_body,$headers);

    ("Location: content2.html");

    echo"teeeeeeeeeeeeeeeeeeeeeeeste";
?>