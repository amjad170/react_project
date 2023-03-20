<?php

include("db_connection.php");

$data = file_get_contents("php://input");
// echo $data;
$data = json_decode($data);

if (isset($data->AptNumber) && ($data->AptNumber != '')) {
    $AptNumber = $data->AptNumber;
    $Name = $data->Name;
    $Email = $data->Email;
    $PhoneNumber = $data->PhoneNumber;

    $sql = "SELECT * FROM   tblappointment WHERE Email = '$Email'";
    // echo $sql;
    $result = mysqli_query($db_conn, $sql);
        
    if (mysqli_num_rows($result) > 0) {
        echo json_encode("Try with different email address");
    } else {
        mysqli_query($db_conn, "INSERT INTO tblappointment (AptNumber, Name, Email, PhoneNumber) VALUES ('$AptNumber', '$Name', '$Email', '$PhoneNumber')");
        if (mysqli_affected_rows($db_conn) > 0) {
            echo json_encode("Registration completed");
        }
    }
} else {
    echo json_encode("All data must be filled");
}