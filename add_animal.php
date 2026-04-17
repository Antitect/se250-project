<?php
include "db.php";

header('Content-Type: application/json');

// Get POST data
$name = $_POST['Name'] ?? '';
$species = $_POST['Species'] ?? '';
$breed = $_POST['Breed'] ?? '';
$age = $_POST['Age'] ?? '';
$adopted = $_POST['Adopted'] ?? 0;

// Validation
if (empty($name) || empty($species) || empty($breed) || $age === '') {
    echo json_encode(["error" => "All fields are required"]);
    exit();
}

if ($age < 0) {
    echo json_encode(["error" => "Age must be >= 0"]);
    exit();
}

// Insert query
$sql = "INSERT INTO Animals (Name, Species, Breed, Age, Adopted)
        VALUES ('$name', '$species', '$breed', $age, $adopted)";

if ($conn->query($sql)) {
    echo json_encode(["message" => "Animal added successfully"]);
} else {
    echo json_encode(["error" => "Insert failed"]);
}
?>
