<?php
$conn = new mysqli("localhost", "root", "mysql", "animal_db");// modified to use ampps default credentials.
//$conn = new mysqli("localhost", "root", "", "animal_db");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}
?>
