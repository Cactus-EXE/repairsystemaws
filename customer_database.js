document.addEventListener('DOMContentLoaded', function () {
    // Function to insert new customer data
    function insertCustomerData(customer) {
        fetch('/insertCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customer),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Customer data inserted:', data);
            // Optionally, perform additional actions after inserting customer data
        })
        .catch(error => {
            console.error('There was a problem inserting customer data:', error);
        });
    }

    // Example of inserting new customer data (call this function when needed)
    const newCustomer = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '123 Main St',
    };
    insertCustomerData(newCustomer);
});
