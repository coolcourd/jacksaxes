<?php

include('config.php');
// parse json request body
$json = file_get_contents('php://input');
$obj = json_decode($json);

// import ./data.json
$data = file_get_contents('./data.json');
$admin_email = $data['email'] || 'info@jacksaxes.co';
// append the admin_email to email_log.txt
file_put_contents('./email_log.txt', $admin_email);

$email_body='';

$required_fields = ['first-name', 'age', 'phone', 'date', 'email', 'sig', 'birthday-month'];

if ($obj->age < 18) {
    $more_required_fields = ['gsig', 'gunderstand'];
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
    if ($key == 'sig') {
        $value = '<img src="' . $value . '" />';
    } else if ($key == 'gsig') {
        $value = '<img src="' . $value . '" />';
    } else if ($key == 'understand') {
        $value = 'Yes';
    } else if ($key == 'gunderstand') {
        $value = 'Yes';
    }
    $email_body .= "<p>$key: $value</p>";
}

// save user in mysqldb
$mysqli = new mysqli("localhost", DBUSER, DBPASS, DBNAME);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$firstName = $obj->{"first-name"};
$lastName = $obj->{"last-name"};
$bday = $obj->{"birthday-month"};

$sql = "INSERT INTO users (`first_name`, `last_name`, `age`, `address`, `city`, `zip`, `phone`, `emergency`, `date`, `email`, `sig`, `birthday_month`, `guardian` ) VALUES ('$firstName', '$lastName', '$obj->age', '$obj->address', '$obj->city', '$obj->zip', '$obj->phone', '$obj->emergency', '$obj->date', '$obj->email', '$obj->sig', '$bday', '$obj->gsig')";
if (!$mysqli->query($sql)) {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

$mysqli->close();


include('./mail.php');
$email_res = sendMail($admin_email, 'new waiver submission', $email_body);


// send response
header('Content-Type: application/json');
echo json_encode([
    'message' => $email_body,
    'email' => $email_res,
    'success' => 1
]);
