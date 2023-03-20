<?php
include('db_connection.php');

$sql = "SELECT * FROM tblservices";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['ID'] = $row['ID'];
    $products['ServiceName'] = $row['ServiceName'];
    $products['Description'] = $row['Description'];
    
    $products['Cost'] = $row['Cost'];

    $myproducts['pr'][] = $products;
}

echo json_encode(['success' => "Yes", 'datas' => $myproducts]);
