<?php
$conn = new mysqli("localhost", "root", "", "utilisateurs");

$result = $conn->query("SELECT * FROM utilisateurs");

$users = [];

while($row = $result->fetch_assoc()){
    $users[] = $row;
}

echo json_encode($users);
