document.addEventListener('DOMContentLoaded', function () {
    // Function to retrieve query parameters from URL
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return params;
    }

    // Retrieve the ticketId from the URL
    const queryParams = getQueryParams();
    const ticketId = queryParams.get('ticketId');

    // Retrieve the ticket details from localStorage using the ticketId
    const ticketData = JSON.parse(localStorage.getItem(ticketId));

    // Display the ticket details
    if (ticketData) {
        const ticketInfoDiv = document.getElementById('ticketInfo');
        // Construct HTML to display all collected data
        const ticketInfoHTML = `
            <p>Name: ${ticketData.name}</p>
            <p>Device Type: ${ticketData.deviceType}</p>
            <p>Make: ${ticketData.deviceMake}</p>
            <p>Model: ${ticketData.deviceModel}</p>
            <p>Issue Description: ${ticketData.issueDescription}</p>
            <p>Passcode: ${ticketData.passcode}</p>
            <p>Expected Time of Completion: ${ticketData.expectedCompletion}</p>
            <p>Contact Information: ${ticketData.contactInfo}</p>
            <p>Phone Carrier: ${ticketData.phoneCarrier}</p>
            <p>IMEI/Serial Number: ${ticketData.imeiSerial}</p>
            <p>Functions: ${ticketData.selectedFunctions.join(', ')}</p>
        `;
        ticketInfoDiv.innerHTML = ticketInfoHTML;
    } else {
        // Display a message if ticket is not found
        const ticketInfoDiv = document.getElementById('ticketInfo');
        ticketInfoDiv.innerText = 'Ticket not found';
    }
});
