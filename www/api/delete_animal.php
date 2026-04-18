<?php
include "db.php";

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');// added for vue testing environment

$id = $_POST['Animal_ID'] ?? '';

if (empty($id)) {
    echo json_encode(["error" => "Animal_ID is required"]);
    exit();
}

$sql = "DELETE FROM Animals WHERE Animal_ID = $id";

if ($conn->query($sql)) {
    echo json_encode(["message" => "Animal deleted successfully"]);
} else {
    echo json_encode(["error" => "Delete failed"]);
}
?>
