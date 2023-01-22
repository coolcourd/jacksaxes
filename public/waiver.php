<?php

include('config.php');
// parse json request body
$json = file_get_contents('php://input');
$obj = json_decode($json);
$queue = [];

// import ./data.json
$data = json_decode(file_get_contents('./data.json'));

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

function saveImage($data_url, $save_path) {
    $data = substr($data_url, strpos($data_url, 'base64,') + 7);
    $data = base64_decode($data);
    $image = imagecreatefromstring($data);
    imagepng($image, $save_path);
}

// loop over obj and print as html
foreach($obj as $key => $value) {
    if ($key == 'sig' || $key == 'gsig') {
        $email_body .= "<p>$key raw: $value</p>";
        $random_string = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 15);
        $img_url = "https://jacksaxes.co/8270hggw/sigs/$random_string.png";
        $save_path = "8270hggw/sigs/$random_string.png";
        array_push($queue, [$value, $save_path]);
        $value = "<img src='$img_url' />";
    }
    if ($key == 'understand' || $key == 'gunderstand') {
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
$email_res = sendMail($data->email, 'new waiver submission', $email_body);


// send response
header('Content-Type: application/json');
echo json_encode([
    'message' => $email_body,
    'email' => $email_res,
    'success' => 1
]);


// loop through queue and save images
foreach ($queue as $item) {
    saveImage($item[0], $item[1]);
}
