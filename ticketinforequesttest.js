// ticket_display.js

document.addEventListener('DOMContentLoaded', function () {
  const ticketId = 1; // Replace with the actual ticket ID you want to display
  const url = `index.php?ticketId=${ticketId}`;

  // Fetch ticket data from the server
  fetch(url)
    .then(response => response.json())
    .then(ticketData => {
      // Display ticket information in the HTML
      const ticketInfoDiv = document.getElementById('ticketInfo');
      ticketInfoDiv.innerHTML = `
        <p><strong>Ticket ID:</strong> ${ticketData.TicketID}</p>
        <p><strong>Name:</strong> ${ticketData.Name}</p>
        <p><strong>Device Type:</strong> ${ticketData.DeviceType}</p>
        <p><strong>Device Make:</strong> ${ticketData.DeviceMake}</p>
        <p><strong>Device Model:</strong> ${ticketData.DeviceModel}</p>
        <p><strong>Issue Description:</strong> ${ticketData.IssueDescription}</p>
        <!-- Add more fields as needed -->
      `;
    })
    .catch(error => {
      console.error('Error fetching ticket data:', error);
    });
});
