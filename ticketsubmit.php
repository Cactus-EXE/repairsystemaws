<?php
// Assuming you have a MySQL database connection
$servername = "193.203.166.100";
$username = "u416682506_loganpostroot";
$password = "BajaBlast3!";
$dbname = "u416682506_shopkeepertest";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to sanitize input data
function sanitizeData($data)
{
    global $conn;
    return mysqli_real_escape_string($conn, htmlspecialchars(trim($data)));
}

// Function to insert data into the ticket table
function insertTicket($data)
{
    global $conn;

    $query = "INSERT INTO ticket (TicketID, Name, DeviceType, DeviceMake, DeviceModel, IssueDescription, Passcode, ExpectedCompletion, ContactInfo, IMEISerial, PhoneCarrier, SelectedFunctions, CustomerID, TechnicianID) VALUES (
        NULL,
        '" . sanitizeData($data['ticket_name']) . "',
        '" . sanitizeData($data['deviceType']) . "',
        '" . sanitizeData($data['deviceMake']) . "',
        '" . sanitizeData($data['deviceModel']) . "',
        '" . sanitizeData($data['issueDescription']) . "',
        '" . sanitizeData($data['passcode']) . "',
        '" . sanitizeData($data['expectedCompletion']) . "',
        '" . sanitizeData($data['contactInfo']) . "',
        '" . sanitizeData($data['imeiSerial']) . "',
        '" . sanitizeData($data['phoneCarrier']) . "',
        '" . implode(', ', $data['selectedFunctions']) . "',
        '" . sanitizeData($data['customerId']) . "',
        '" . sanitizeData($data['technicianId']) . "'
    )";

    if ($conn->query($query) === TRUE) {
        echo "Ticket inserted successfully";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

// Function to insert data into the customers table
function insertCustomer($data)
{
    global $conn;

    $query = "INSERT INTO customers (id, name, email, phone, address) VALUES (
        NULL,
        '" . sanitizeData($data['customer_name']) . "',
        '" . sanitizeData($data['customer_email']) . "',
        '" . sanitizeData($data['customer_phone']) . "',
        '" . sanitizeData($data['customer_address']) . "'
    )";

    if ($conn->query($query) === TRUE) {
        echo "Customer inserted successfully";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process ticket form data
    if (isset($_POST['ticket_name'])) {
        $ticketData = array(
            'ticket_name' => $_POST['ticket_name'],
            'deviceType' => $_POST['deviceType'],
            'deviceMake' => $_POST['deviceMake'],
            'deviceModel' => $_POST['deviceModel'],
            'issueDescription' => $_POST['issueDescription'],
            'passcode' => $_POST['passcode'],
            'expectedCompletion' => $_POST['expectedCompletion'],
            'contactInfo' => $_POST['contactInfo'],
            'imeiSerial' => $_POST['imeiSerial'],
            'phoneCarrier' => $_POST['phoneCarrier'],
            'selectedFunctions' => isset($_POST['functions']) ? $_POST['functions'] : array(),
            'customerId' => $_POST['customerId'],
            'technicianId' => $_POST['technicianId'],
        );

        // Insert data into the ticket table
        insertTicket($ticketData);
    }

    // Process customer form data
    if (isset($_POST['customer_name'])) {
        $customerData = array(
            'customer_name' => $_POST['customer_name'],
            'customer_email' => $_POST['customer_email'],
            'customer_phone' => $_POST['customer_phone'],
            'customer_address' => $_POST['customer_address'],
        );

        // Insert data into the customers table
        insertCustomer($customerData);
    }
}

// Close the database connection
$conn->close();
?>