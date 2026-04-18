<?php
include "db.php";

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');// added for vue testing environment

$sql = "SELECT * FROM Animals";
$result = $conn->query($sql);

$animals = [];

if ($result) {
    while($row = $result->fetch_assoc()) {
        $animals[] = $row;
    }
}

echo json_encode($animals);
?>
