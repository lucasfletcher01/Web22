<?php
if(!isset($_POST['submit']))
{
echo "error; you need to submit";
}
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(empty ($name)||empty($email))
{
echo "Please enter name and email";
exit;
}

$email_from = 'u1975239@unimail.hud.ac.uk';
$email_subject = "Contact Form Submission";
$email_body = "Submitted from Web22 Contact Form by $name.\n".
"Email Address: $email\n".
"Message:\n $message".

$to = "u1975239@unimail.hud.ac.uk";
$headers = "From: $email_from \r\n";

mail($to,$email_subject,$email_body,$headers);

?>
