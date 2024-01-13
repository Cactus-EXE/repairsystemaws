const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'shopkeeper',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Serve static files (like your HTML, CSS, and JS files)
app.use(express.static('public'));

// Handle form submission
app.post('/updateCustomer', express.urlencoded({ extended: true }), (req, res) => {
  const { name, email, phone, address, customerId } = req.body;

  // Update the customer in the database
  const query = 'UPDATE customers SET name=?, email=?, phone=?, address=? WHERE id=?';
  connection.query(query, [name, email, phone, address, customerId], (err, result) => {
    if (err) {
      console.error('Error updating customer:', err);
      res.status(500).send('Error updating customer');
      return;
    }
    console.log('Customer updated in the database');
    res.status(200).send('Customer updated successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
