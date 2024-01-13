<?php
$servername = "193.203.166.100";
$username = "u416682506_loganpostroot";
$password = "BajaBlast3!";
$dbname = "u416682506_shopkeepertest";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare an SQL statement
$stmt = $conn->prepare("INSERT INTO ticket (Name, DeviceType, DeviceMake, DeviceModel, IssueDescription, Passcode, ExpectedCompletion, ContactInfo, IMEISerial, PhoneCarrier, SelectedFunctions, CustomerID, TechnicianID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

// Bind parameters and execute the statement
$stmt->bind_param("sssssssssssss", $_POST['ticket_name'], $_POST['deviceType'], $_POST['deviceMake'], $_POST['deviceModel'], $_POST['issueDescription'], $_POST['passcode'], $_POST['expectedCompletion'], $_POST['contactInfo'], $_POST['imeiSerial'], $_POST['phoneCarrier'], $_POST['selectedFunctions'], $_POST['customerId'], $_POST['technicianId']);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
