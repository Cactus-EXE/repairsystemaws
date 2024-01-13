document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form data
    const formData = new FormData(this);

    // Send form data to the PHP file using fetch API
    fetch('submit_ticket.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Handle the response from PHP (if needed)
        console.log(data);
    })
    .catch(error => {
        // Handle errors here
        console.error('There was an error with the fetch operation:', error);
    });
});
