<?php

function sendMail($to, $subject, $message)
{

    $mk = MAIL_API;
    $data = [
        "name" => "Campaign sent via the API",
        "subject" => $subject,
        "sender" => [
            "name" => "jacksaxes site",
            "email" => "admin@courdh.com"
        ],
        "type" => "classic",
        "htmlContent" => $message,
        "to" => [
            [
                "email" => $to
            ]
        ]
    ];

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.sendinblue.com/v3/smtp/email",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => array(
            "api-key: $mk",
            "cache-control: no-cache",
            "content-type: application/json",
            "postman-token: 5273e708-627e-e31f-3e5e-c8b6799ac1cd"
        ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        return ["success" => 0, "error" => $err];
    } else {
        return ["success" => 1, "data" => $response];
    }
}
