<?php

// parse json request body
$json = file_get_contents('php://input');
$obj = json_decode($json);

$email_body='';

$required_fields = ['first-name', 'last-name', 'age', 'address', 'city', 'zip', 'phone', 'emergency', 'date', 'email', 'sig', 'birthday-month'];

if ($obj->age < 18) {
    $more_required_fields = ['gfirst', 'glname', 'gsig', 'gunderstand'];
    $required_fields = array_merge($required_fields, $more_required_fields);
} else {
    $required_fields = array_merge($required_fields, ['understand']);
}

function fail_run($msg) {
    echo json_encode(['success' => false, 'error' => $msg, 'data' => $obj]);
    exit;
}

foreach ($required_fields as $field) {
    if (!isset($obj->$field) || empty($obj->$field)) {
        fail_run("Missing field: $field");
    }
}


// loop over obj and print as html
foreach($obj as $key => $value) {
    $email_body .= "<p>$key: $value</p>";
}

// save user in mysqldb
$mysqli = new mysqli("localhost", "<dbuser>", "<dbpass>", "<dbname>");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$sql = "INSERT INTO users (`first_name`, `last_name`, `age`, `address`, `city`, `zip`, `phone`, `emergency`, `date`, `email`, `sig`, `birthday_month` ) VALUES ('$obj->first-name', '$obj->last-name', '$obj->age', '$obj->address', '$obj->city', '$obj->zip', '$obj->phone', '$obj->emergency', '$obj->date', '$obj->email', '$obj->sig', '$obj->birthday-month')";
if (!$mysqli->query($sql)) {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

$mysqli->close();


// setup email
// $to      = 'info@jacksaxes.com';
$to      = 'courdheadman@gmail.com';
$subject = 'Waiver submission';
$message = $email_body;
$headers = 'From:site@jacksaxes.com' . "\r\n" .
    'Reply-To:noreply@jacksaxes.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// send email
mail($to, $subject, $message, $headers);

// send response
header('Content-Type: application/json');
echo json_encode([
    'message' => $email_body,
    'success' => 1
]);


?>