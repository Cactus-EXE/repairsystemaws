async function fetchData() {
    try {
        // Replace 'YOUR_API_GATEWAY_ENDPOINT' with the actual API Gateway endpoint URL
        const response = await fetch('https://9o20ut98jj.execute-api.us-east-2.amazonaws.com/dev');
        const data = await response.json();

        const customerList = document.getElementById('customerList');
        customerList.innerHTML = ''; // Clear existing content

        data.forEach((customer) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${customer.first_name} ${customer.last_name} - Email: ${customer.email}, Phone: ${customer.phone_number}`;
            customerList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and display data when the page loads
fetchData();
