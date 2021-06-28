<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allors-Headers: Content-Type");
header("Content-Type: application/json");

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty'
  } else {
    $email = $_POST['email'];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = 'Invalid email';
    }
  }

  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }

  if (empty($errors)) {
    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
      <title>$email vous a envoyé un message</title>
    </head>
    <body style=\"background-color:#fafafa;\">
      <div style=\"padding:20px;\">
        Date: <span style=\"color:#888\">$date</span>
        <br>
        Email: <span style=\"color:#888\">$email</span>
        <br>
        Message: <span style=\"color:#888\">$message</span>
      </div>
    </body>
    </html>
    ";
    
    $headers = 'From: Contact Form <contact@antoinelemarchand.xyz>'. "\r\n" .
      "Reply-To: $email" . "\r\n".
      "MIME-Version: 1.0\r\n" .
      "Content-Type: text/html; charset=utf-8\r\n";

    $to = 'contact@antoinelemarchand.xyz';
    $subject = "Mail du Formulaire";
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;
    }
  }
}
?>

<?php if (!empty($errors)) :?>
{
  "status": "fail",
  "error": <?php echo json_encode($errors) ?>
}
<?php endif; ?>

<?php if ($sent === true) : ?>
{
  "status": "success",
  "message": "Thanks for contacting me ! you message has been sent !"
}
<?php endif; ?>
