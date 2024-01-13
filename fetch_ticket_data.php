<?php
// fetch_ticket_data.php

// Replace the following with your database connection details
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "Shopkeeper";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get ticket ID from the query parameter
$ticketId = $_GET['ticketId'];

// Fetch ticket data from the database
$sql = "SELECT * FROM ticket WHERE TicketID = $ticketId";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Convert the result to JSON format
    $ticketData = $result->fetch_assoc();
    echo json_encode($ticketData);
} else {
    echo json_encode(['error' => 'Ticket not found']);
}

$conn->close();
?>