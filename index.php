<!-- This is an HTML file for creating a ticket in a phone repair ticketing system -->

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta tags for character set and viewport -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title of the page -->
    <title>Phone Repair Ticketing System</title>
    <!-- Link to the external stylesheet -->
    <link rel="stylesheet" href="InsideTicketStyles.css">
</head>

<body>
    <!-- Header with navigation links -->
    <header>
        <nav>
            <ul>
                <li><a href="customer_database.html">Customers</a></li>
                <li><a href="customer_details.html">New Customers</a></li>
                <li><a href="ticket_list.html">Ticket List</a></li>
                <li><a href="InsideTicket.html">Create Ticket</a></li>
            </ul>
        </nav>
    </header>


    <!-- Main content container -->
    <div class="container">
        <!-- Title for creating a ticket -->
        <h1>Create Ticket</h1>

        <!-- Form for ticket creation -->
        <form id="ticketForm" action="ticketsubmit.php" method="post">
            <!-- Input field for ticket name -->
            <label for="ticket_name">Ticket Name:</label>
            <input type="text" id="ticket_name" name="ticket_name" required>


            <!-- Input field for customer ID -->
            <label for="customerId">Customer ID:</label>
            <input type="text" id="customerId" name="customerId" required>


            <!-- Input field for technician ID -->
            <label for="technicianId">Technician ID:</label>
            <input type="text" id="technicianId" name="technicianId" required>


            <!-- Dropdown for choosing device type -->
            <label for="deviceType">Choose a Device Type:</label>
            <select name="deviceType" id="deviceType">
                <option value="">Select</option> <!-- Default option -->
                <!-- Options for different device types -->
                <option value="Phone">Phone</option>
                <option value="Tablet">Tablet</option>
                <option value="Laptop">Laptop</option>
                <option value="Gaming_Console">Gaming Console</option>
                <option value="Computer">Computer</option>
                <option value="Watch">Watch</option>
                <option value="Other">Other</option>
                <!-- Add more options for other device types -->
            </select>


            <!-- Dropdown for choosing device make -->
            <label for="deviceMake">Choose a Device Make:</label>
            <select name="deviceMake" id="deviceMake" disabled>
                <option value="">Select Device Type First</option>
            </select>

            <!-- Dropdown for choosing device model -->
            <label for="deviceModel">Choose a Device Model:</label>
            <select name="deviceModel" id="deviceModel" disabled>
                <option value="">Select Device Type and Make First</option>
            </select>

            <!-- Input field for issue description -->
            <label for="issueDescription">Issue Description:</label>
            <textarea id="issueDescription" name="issueDescription" required></textarea>

            <!-- Input field for IMEI/Serial Number -->
            <label for="imeiSerial">IMEI/Serial Number:</label>
            <input type="text" id="imeiSerial" name="imeiSerial">

            <!-- Input field for device passcode -->
            <label for="passcode">Passcode:</label>
            <input type="text" id="passcode" name="passcode">

            <!-- Input field for expected time of completion -->
            <label for="expectedCompletion">Expected Time of Completion:</label>
            <input type="text" id="expectedCompletion" name="expectedCompletion">

            <!-- Input field for contact information -->
            <label for="contactInfo">Contact Information:</label>
            <input type="text" id="contactInfo" name="contactInfo">

            <!-- Dropdown for selecting phone carrier -->
            <label for="phoneCarrier">Phone Carrier:</label>
            <select name="phoneCarrier" id="phoneCarrier">
                <option value="">Select</option>
                <!-- Options for different phone carriers -->
                <option value="Verizon">Verizon</option>
                <option value="AT&T">AT&T</option>
                <option value="T-Mobile">T-Mobile/Metro</option>
                <option value="Sprint">Sprint</option>
                <option value="Boost">Boost</option>
                <option value="Spectrum">Spectrum</option>
                <option value="Other">Other (Specify in description)</option>
                <!-- Add more carrier options as needed -->
            </select>

            <!-- Container for device functions checkboxes -->
            <div id="deviceFunctionsContainer"></div>

            <!-- Button to submit the ticket -->
            <button type="submit">Submit Ticket</button>
        </form>
        <script>
            // Your JavaScript code for handling ticket submission and table insertion goes here
            // ...

            // Function to display tickets from local storage on the ticket table
            function displayTicketsInTable() {
                const ticketTable = document.getElementById('ticketTable');
                ticketTable.innerHTML = ''; // Clear existing table content

                // Loop through local storage items and display tickets in a table format
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key.startsWith('ticket_')) { // Check if the item is a ticket
                        const ticketData = JSON.parse(localStorage.getItem(key));
                        const row = ticketTable.insertRow(-1); // Insert a row at the end of the table

                        // Insert cells into the row
                        const cellName = row.insertCell(0);
                        cellName.textContent = ticketData.name;

                        // Insert more cells for other ticket data as needed
                        // ...
                    }
                }
            }

            // Call the function to display tickets in the table when the page loads
            displayTicketsInTable();
        </script>
    </div>
    </div>

    <!-- Script tag to include JavaScript file -->
    <script src="InsideTicket.js"></script>
    <script src="submitTicket.js"></script>
</body>

</html>