<?php
include "db.php";

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');// added for vue testing environment

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

if (isset($_POST['Animal_ID'])) {
    $id = $_POST['Animal_ID'];
    $sql = "INSERT INTO Animals (Animal_ID, Name, Species, Breed, Age, Adopted)
            VALUES ('$id', '$name', '$species', '$breed', $age, $adopted)";
} else {
    // Insert query
    $sql = "INSERT INTO Animals (Name, Species, Breed, Age, Adopted)
            VALUES ('$name', '$species', '$breed', $age, $adopted)";
}

if ($conn->query($sql)) {
    $newAnimalId = $conn->insert_id;// added to allow for client side deletion after adding.
    echo json_encode(["message" => "Animal added successfully", "Animal_ID" => $newAnimalId]);

    //adding photo upload handling
    if (isset($_FILES['Photo']) && $_FILES['Photo']['error'] === UPLOAD_ERR_OK && $_FILES['Photo']['type'] === 'image/jpeg') {
        if (!is_dir('../uc')) {
            mkdir('../uc', 0755, true);
        }

        move_uploaded_file($_FILES['Photo']['tmp_name'], '../uc/' . $newAnimalId . '.jpg');
    }
} else {
    echo json_encode(["error" => "Insert failed"]);
}
?>
