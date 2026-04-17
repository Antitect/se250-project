<?php
$conn = new mysqli("localhost", "root", "", "animal_db");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}
?>
