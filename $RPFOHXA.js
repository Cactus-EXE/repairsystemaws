document.addEventListener('DOMContentLoaded', function () {
    const ticketList = document.getElementById('ticketList');

    // Example ticket data (you can replace this with your actual ticket data)
    const tickets = [
        {
            id: 1,
            name: 'John Doe',
            deviceType: 'Phone',
            deviceMake: 'iPhone',
            deviceModel: '12 Pro',
            issueDescription: 'Screen not working',
            functions: ['Digitizer (Glass)', 'LCD (Display)', 'Power Buttons'],
        },
        {
            id: 2,
            name: 'Jane Smith',
            deviceType: 'Tablet',
            deviceMake: 'iPad',
            deviceModel: 'Air (4th Gen)',
            issueDescription: 'Battery draining quickly',
            functions: ['LCD (Display)', 'Power Buttons', 'Charging Port'],
        },
        // Add more ticket data as needed
    ];

    // Display tickets in the list
    tickets.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Ticket #${ticket.id} - ${ticket.name}`;
        li.addEventListener('click', () => displayTicketDetails(ticket));
        ticketList.appendChild(li);
    });

    // Function to display ticket details when clicked
    function displayTicketDetails(ticket) {
        // Clear existing details
        const ticketDetails = document.getElementById('ticketDetails');
        ticketDetails.innerHTML = '';

        // Create elements to display ticket details
        const heading = document.createElement('h2');
        heading.textContent = `Ticket #${ticket.id}`;
        const detailsList = document.createElement('ul');
        const nameItem = createDetailItem('Name', ticket.name);
        const deviceTypeItem = createDetailItem('Device Type', ticket.deviceType);
        const deviceMakeItem = createDetailItem('Device Make', ticket.deviceMake);
        const deviceModelItem = createDetailItem('Device Model', ticket.deviceModel);
        const descriptionItem = createDetailItem('Issue Description', ticket.issueDescription);
        const functionsItem = createDetailItem('Functions', ticket.functions.join(', '));

        // Append details to the list
        detailsList.appendChild(nameItem);
        detailsList.appendChild(deviceTypeItem);
        detailsList.appendChild(deviceMakeItem);
        detailsList.appendChild(deviceModelItem);
        detailsList.appendChild(descriptionItem);
        detailsList.appendChild(functionsItem);

        // Append details to the container
        ticketDetails.appendChild(heading);
        ticketDetails.appendChild(detailsList);
    }

    // Helper function to create a detail item
    function createDetailItem(label, value) {
        const item = document.createElement('li');
        const labelSpan = document.createElement('span');
        labelSpan.className = 'label';
        labelSpan.textContent = label + ': ';
        item.appendChild(labelSpan);
        item.textContent += value;
        return item;
    }
});
