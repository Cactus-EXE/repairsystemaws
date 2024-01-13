document.addEventListener('DOMContentLoaded', function () {
    const ticketList = document.getElementById('ticketList');
    let ticketsArray = []; // Array to hold ticket data

    // Loop through local storage items and gather ticket data into an array
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('ticket_')) { // Check if the item is a ticket
            const ticketData = JSON.parse(localStorage.getItem(key));
            ticketData.ticketId = key; // Add ticketId for reference
            ticketsArray.push(ticketData);
        }
    }

    // Function to display sorted tickets
    function displaySortedTickets(sortedTickets) {
        // Clear existing tickets
        ticketList.innerHTML = '';

        // Display sorted tickets
        sortedTickets.forEach(ticketData => {
            const ticketInfo = `
                <span>${ticketData.name}</span>
                <span>${ticketData.deviceType}</span>
                <span>${ticketData.deviceMake}</span>
                <span>${ticketData.deviceModel}</span>
            `;

            // Create a link for each ticket
            const li = document.createElement('li');
            const ticketLink = document.createElement('a');
            const ticketInfoDiv = document.createElement('div');
            ticketInfoDiv.classList.add('ticketInfo');
            ticketInfoDiv.innerHTML = ticketInfo;
            ticketLink.href = `ticket_details.html?ticketId=${ticketData.ticketId}`; // Link to ticket details page
            ticketLink.appendChild(ticketInfoDiv);
            li.appendChild(ticketLink);
            ticketList.appendChild(li);
        });
    }

    // Sort tickets by name (alphabetical order)
    function sortByName() {
        const sortedByName = ticketsArray.slice().sort((a, b) => a.name.localeCompare(b.name));
        displaySortedTickets(sortedByName);
    }

    let isDescending = false;

    function toggleSortByDateSubmitted() {
        isDescending = !isDescending;
        sortByDateSubmitted();
    }
    
    function sortByDateSubmitted() {
        const sortedByDate = ticketsArray.slice().sort((a, b) => {
            const dateA = parseInt(a.ticketId.split('_')[1]);
            const dateB = parseInt(b.ticketId.split('_')[1]);
    
            if (isDescending) {
                return dateB - dateA; // Sort in descending order
            } else {
                return dateA - dateB; // Sort in ascending order
            }
        });
        displaySortedTickets(sortedByDate);
    }
    
    // Initially display tickets sorted by name
    sortByName();

    // Event listener for sorting by name
    document.getElementById('sortByNameBtn').addEventListener('click', sortByName);

    // Event listener for sorting by date submitted
    document.getElementById('sortByDateBtn').addEventListener('click', toggleSortByDateSubmitted);
});
