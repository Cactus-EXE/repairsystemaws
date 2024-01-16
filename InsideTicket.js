document.addEventListener('DOMContentLoaded', function () {
    const deviceTypeSelect = document.getElementById('deviceType');
    const deviceMakeSelect = document.getElementById('deviceMake');
    const deviceModelSelect = document.getElementById('deviceModel');
    const deviceFunctionsContainer = document.getElementById('deviceFunctionsContainer');
    const ticketList = document.getElementById('ticketList');


    // Define options for device make and model based on device type
    const deviceOptions = {
        Phone: {
            deviceMake: ['iPhone', 'Samsung', 'Motorola', 'Google', 'Other Phone Makes'],
            deviceModel: {
                iPhone: [
                    '15 Pro Max', '15 Pro', '15 Plus', '14 Pro Max', '14 Pro', '14',
                    '13 Pro Max', '13 Pro', '13', '12 Pro Max', '12 Pro', '12',
                    '11 Pro Max', '11 Pro', '11', 'XR', 'XS Max', 'XS', 'X', '8 Plus',
                    'SE (2022 3rd Gen)', 'SE (2020 2nd Gen)', '8', '7 Plus', '7', '6S Plus',
                    '6S', '6 Plus', '6', 'SE (1st Gen)'
                ],
                Samsung: [
                    'S22 Ultra', 'S22+', 'S22', 'S21 Ultra', 
                    'S21+', 'S21', 'S20 Ultra', 'S20+', 'S20', 'S10 5G', 'S10+', 
                    'S10', 'S10e', 'S9+', 'S9', 'S8+', 'S8', 'S7 Edge', 'S7', 
                    'S6 Edge+', 'S6 Edge', 'S6', 'Note 20 Ultra', 'Note 20', 
                    'Note 10+', 'Note 10', 'Note 9', 'Note 8', 'Note 5', 'Note 4', 'Note 3', 'Note 2',
                    'A90 5G (A908 / 2019)', 'A9 Pro (A910 / 2016)', 'A9 (A920 / 2018)', 'A80 (A805 / 2019)',
                    'A8 Plus (A730 / 2018)', 'A8s (G887 / 2018)', 'A8 (A810 / 2016)', 'A8 (A530 / 2018)',
                    'A73 5G (A736 / 2022)', 'A73 (A735 / 2022)', 'A72 (A725 / 2021)', 'A71 5G (A716 / 2020)',
                    'A71 (A715 / 2020)', 'A70 (A705 / 2019)', 'A7 (A750 / 2018)', 'A7 (A720 / 2017)',
                    'A7 (A710 / 2016)', 'A60 (A606 / 2019)', 'A6 Plus (A605 / 2018)', 'A6 (A600 / 2018)',
                    'A54 5G (A546 / 2023)', 'A53 5G (A536 / 2022)', 'A52s (A528 / 2021)', 'A52 5G (A526 / 2021)',
                    'A52 4G (A525 / 2021)', 'A51 5G (A516 / 2020)', 'A51 4G (A515 / 2019)', 'A50s (A507 / 2019)',
                    'A50 (A505 / 2019)', 'A5 (A520 / 2017)', 'A5 (A510 / 2016)', 'A5 (A500 / 2015)',
                    'A42 5G (A426 / 2020)', 'A41 (A415 / 2020)', 'A40S (A407 / 2019)', 'A40 (A405 / 2019)',
                    'A34 5G (A346 / 2023)', 'A33 5G (A336 / 2022)', 'A32 5G (A326 / 2021)', 'A32 4G (A325 / 2021)',
                    'A31 (A315 / 2020)', 'A30s (A307 / 2019)', 'A30 (A305 / 2019)', 'A3 (A320 / 2017)',
                    'A3 (A310 / 2016)', 'A3 (A300 / 2015)', 'A24 (A245 / 2023)', 'A23 5G (A236 / 2022)',
                    'A23 (A235 / 2022)', 'A22 5G (A226 / 2021)', 'A22 4G (A225 / 2021)', 'A21s (A217 / 2020)',
                    'A21 (A215 / 2020)', 'A20s (A207 / 2019)', 'A20e (A202 / 2019)', 'A20 (A205 / 2019)',
                    'A14 5G (A146 / 2023)', 'A14 (A145 / 2023)', 'A13 5G (A136 / 2021)', 'A13 (A135 / 2022)',
                    'A12 Nacho (A127 / 2021)', 'A12 (A125 / 2020)', 'A11 (A115 / 2020)', 'A10s (A107 / 2019)',
                    'A10e (A102 / 2019)', 'A10 (A105 / 2019)', 'A05S (A057 / 2023)', 'A05 (A055 / 2023)',
                    'A04S (A047 / 2022)', 'A04 (A045 / 2022)', 'A04E (A042 / 2022)', 'A03s (A037 / 2021)',
                    'A03 (A035 / 2021)', 'A03 Core (A032 / 2021)', 'A02s (A025 / 2020)', 'A02 (A022 / 2020)',
                    'A01 Core (A013 / 2020)', 'A01 (A015 / 2020)'
                ],
                Motorola: ['Samsung Model1', 'Samsung Model2', 'Samsung Model3'
              ],
            Google: [
                'Pixel 8 Pro', 'Pixel 8', 'Pixel 7 Pro', 'Pixel 7a', 'Pixel 7', 'Pixel 6 Pro', 'Pixel 6a', 'Pixel 6', 
                'Pixel 5a 5G', 'Pixel 5', 'Pixel 4a 5G', 'Pixel 4a', 'Pixel 4 XL','Pixel 4'
            ],
            },
            deviceFunctions: [
                'Digitizer (Glass)', 'LCD (Display)', 'Home Button', 'Touch ID', 'Face ID', 'Front Camera', 
                'Back Camera', 'Top Speaker', 'Bottom Speaker', 'Top Microphone', 'Bottom Microphone', 
                'Volume Buttons', 'Power Buttons', 'Charging Port', 'Wireless Charging',
            ]
        },
        Tablet: {
            deviceMake: ['iPad', 'Samsung', 'Other'],
            deviceModel: {
                iPad: [
                'iPad (10th Gen)', 'iPad (9th Gen)', 'iPad (8th Gen)', 'iPad (7th Gen)', 'iPad (6th Gen)', 'iPad (5th Gen)', 'iPad (4th Gen)',
                'iPad (3rd Gen)', 'iPad (2nd Gen)', 'iPad (1st Gen)', 'iPad Air (5th Gen)', 'iPad Air (4th Gen)', 'iPad Air (3rd Gen)', 
                'iPad Air (2nd Gen)', 'iPad Air (1st Gen)', 'iPad Pro (12.9-inch, 5th Gen)',  'iPad Pro (12.9-inch, 4th Gen)',  'iPad Pro (12.9-inch, 3rd Gen)',
                'iPad Pro (12.9-inch, 2nd Gen)',  'iPad Pro (11-inch, 3rd Gen)', 'iPad Pro (11-inch, 2nd Gen)', 'iPad Pro (11-inch, 1st Gen)',
                'iPad Pro (10.5-inch)', 'iPad Pro (9.7-inch)', 'iPad Mini (6th Gen)', 'iPad Mini (5th Gen)', 'iPad Mini (4th Gen)', 
                'iPad Mini (3rd Gen)', 'iPad Mini (2nd Gen)', 'iPad Mini (1st Gen)', 'Other'
            ],
            Samsung: ['Samsung Tablet Model1', 'Samsung Tablet Model2', /* ... */ 
            ],
                // Add more models for other makes
            Other: ['Samsung Tablet Model1', 'Samsung Tablet Model2', /* ... */ 
            ],
                // Add more models for other makes
            },
            deviceFunctions: [
                'Digitizer (Glass)', 'LCD (Display)', 'Home Button','Touch ID','Face ID', 'Front Camera', 
                'Back Camera', 'Top Speaker', 'Bottom Speaker', 'Top Microphone', 'Bottom Microphone', 
                'Volume Buttons', 'Power Buttons', 'Charging Port', 'Wireless Charging',
            ]
        },
        Gaming_Console: {
            deviceMake: ['Sony', 'Microsoft', 'Other'],
            deviceModel: {
                Sony: [
                    'Playstation 5 Disc', 'Playstation 5 Digital Edition', 'Playstation 4 Pro', 'Playstation 4 Slim',
                    'Playstation 4', 'Playstation 3', 'Playstation 2', 'Playstation 1', 'Controller'
                ],
                Microsoft: [
                    'Xbox Series X', 'Xbox Series S', 'Xbox One X', 'Xbox One S', 'Xbox One', 'Xbox 360', 'Controller'
                ],
                Nintendo: [
                    'Nintendo Switch OLED', 'Nintendo Switch', 'Nintendo Switch Lite', 'Wii U', 'Wii', 'GameCube',   
                    'Nintendo DS', 'Nintendo DS Lite', 'Nintendo DSi', 'Nintendo 3DS', 'Nintendo 3DS XL', 'Nintendo 2DS',
                    'New Nintendo 3DS', 'New Nintendo 3DS XL', 'New Nintendo 2DS XL'
                ],
            },
            deviceFunctions: [
                'Powers On', 'Displays', 'HDMI Port', 'USB Port', 'Power Button',
            ]
        },
    };
        // Add options for other device types
    

    // Helper function to filter options based on user input
    function filterOptions(input, options) {
        return options.filter(option => option.toLowerCase().includes(input.toLowerCase()));
    }

    // Function to populate device make options
    function populateDeviceMakeOptions() {
        const selectedDeviceType = deviceTypeSelect.value;
        const userInput = deviceMakeSelect.value;
        deviceMakeSelect.innerHTML = ''; // Clear existing options
        deviceModelSelect.innerHTML = '<option value="">Select Device Type and Make First</option>'; // Reset device model options
        deviceMakeSelect.disabled = true;
        deviceModelSelect.disabled = true;

        if (selectedDeviceType in deviceOptions) {
            deviceMakeSelect.disabled = false;
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select';
            deviceMakeSelect.appendChild(defaultOption);

            const filteredMakes = filterOptions(userInput, deviceOptions[selectedDeviceType].deviceMake);

            filteredMakes.forEach(make => {
                const option = document.createElement('option');
                option.value = make;
                option.textContent = make;
                deviceMakeSelect.appendChild(option);
            });
        }
    }

    // Function to populate device model options
    function populateDeviceModelOptions() {
        const selectedDeviceType = deviceTypeSelect.value;
        const selectedDeviceMake = deviceMakeSelect.value;
        const userInput = deviceModelSelect.value;
        deviceModelSelect.innerHTML = ''; // Clear existing options
        deviceModelSelect.disabled = true;

        if (selectedDeviceType in deviceOptions && selectedDeviceMake) {
            deviceModelSelect.disabled = false;
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select';
            deviceModelSelect.appendChild(defaultOption);

            const filteredModels = filterOptions(userInput, deviceOptions[selectedDeviceType].deviceModel[selectedDeviceMake]);

            filteredModels.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                deviceModelSelect.appendChild(option);
            });
        }
    }

    // Call createDeviceFunctionsCheckboxes initially
    createDeviceFunctionsCheckboxes();

    // Event listeners for device type, make, and model changes
    deviceTypeSelect.addEventListener('change', function () {
        populateDeviceMakeOptions();
        populateDeviceModelOptions();
        createDeviceFunctionsCheckboxes(); // Create checkboxes when device type changes
    });

    deviceMakeSelect.addEventListener('change', function () {
        populateDeviceModelOptions();
        createDeviceFunctionsCheckboxes(); // Create checkboxes when device make changes
    });

    // Function to create checkboxes for device functions based on device type
    function createDeviceFunctionsCheckboxes() {
        const selectedDeviceType = deviceTypeSelect.value;
        const selectedDeviceMake = deviceMakeSelect.value;
        const selectedDeviceModel = deviceModelSelect.value;
        const functionsForSelectedDeviceType = deviceOptions[selectedDeviceType]?.deviceFunctions || [];

        deviceFunctionsContainer.innerHTML = ''; // Clear existing checkboxes

        functionsForSelectedDeviceType.forEach(function (func) {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'functions';
            input.value = func;
            label.appendChild(input);
            label.appendChild(document.createTextNode(func));
            deviceFunctionsContainer.appendChild(label);
        });
    }
    function saveTicketToLocalStorage(ticketData) {
        const ticketKey = `ticket_${new Date().getTime()}`;
        localStorage.setItem(ticketKey, JSON.stringify(ticketData));
    }

    // Event listener for form submission
    document.getElementById('ticketForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const selectedDeviceType = deviceTypeSelect.value;
        const selectedDeviceMake = deviceMakeSelect.value;
        const selectedDeviceModel = deviceModelSelect.value;
        const name = document.getElementById('ticket_name').value;
        const issueDescription = document.getElementById('issueDescription').value;
        const passcode = document.getElementById('passcode').value;
        const expectedCompletion = document.getElementById('expectedCompletion').value;
        const contactInfo = document.getElementById('contactInfo').value;
        const imeiSerial = document.getElementById('imeiSerial').value;
        const phoneCarrier = document.getElementById('phoneCarrier').value;
        const selectedFunctions = Array.from(deviceFunctionsContainer.querySelectorAll('input[name="functions"]:checked')).map(checkbox => checkbox.value);
        const customerId = document.getElementById('customerId').value;
        const technicianId = document.getElementById('technicianId').value;

        // Create a ticket object
        const ticketData = {
            name,
            deviceType: selectedDeviceType,
            deviceMake: selectedDeviceMake,
            deviceModel: selectedDeviceModel,
            issueDescription,
            passcode,
            expectedCompletion,
            contactInfo,
            imeiSerial,
            phoneCarrier,
            selectedFunctions,
            customerId,
            technicianId,
        };

        // Save ticket to localStorage
        saveTicketToLocalStorage(ticketData);

        // Display the ticket information in the list
        const ticketInfo = `${name} - Device Type: ${selectedDeviceType}, Make: ${selectedDeviceMake}, Model: ${selectedDeviceModel}, Issue Description: ${issueDescription}, Functions: ${selectedFunctions.join(', ')}`;
        const li = document.createElement('li');
        li.textContent = ticketInfo;
        ticketList.appendChild(li);

        // Clear form inputs and reset selections after submission
        document.getElementById('ticketForm').reset();
        deviceMakeSelect.innerHTML = '<option value="">Select</option>';
        deviceModelSelect.innerHTML = '<option value="">Select Device Type and Make First</option>';
        deviceFunctionsContainer.innerHTML = '';
    });


    // Function to display tickets from local storage on the ticket list page
    function displayTicketsFromLocalStorage() {
        ticketList.innerHTML = ''; // Clear existing tickets

        // Loop through local storage items and display tickets
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('ticket_')) { // Check if the item is a ticket
                const ticketData = JSON.parse(localStorage.getItem(key));
                const ticketInfo = `${ticketData.name} - Device Type: ${ticketData.deviceType}, Make: ${ticketData.deviceMake}, Model: ${ticketData.deviceModel}, Issue Description: ${ticketData.issueDescription}, Functions: ${ticketData.selectedFunctions.join(', ')}`;
                const li = document.createElement('li');
                li.textContent = ticketInfo;
                ticketList.appendChild(li);
            }
        }
    }

    // Call the function to display tickets from local storage when the page loads
    displayTicketsFromLocalStorage();

    // Event listeners for user input in device make and model fields
    deviceMakeSelect.addEventListener('input', function () {
        const userInput = deviceMakeSelect.value;
        const selectedDeviceType = deviceTypeSelect.value;
        if (selectedDeviceType in deviceOptions) {
            const filteredMakes = filterOptions(userInput, deviceOptions[selectedDeviceType].deviceMake);
            displayFilteredResults(filteredMakes);
        }
    });

    deviceModelSelect.addEventListener('input', function () {
        const userInput = deviceModelSelect.value;
        const selectedDeviceType = deviceTypeSelect.value;
        const selectedDeviceMake = deviceMakeSelect.value;
        if (selectedDeviceType in deviceOptions && selectedDeviceMake) {
            const filteredModels = filterOptions(userInput, deviceOptions[selectedDeviceType].deviceModel[selectedDeviceMake]);
            displayFilteredResults(filteredModels);
        }
    });

    // Event listener for device make selection (second dropdown)
    deviceMakeSelect.addEventListener('change', function () {
        populateDeviceModelOptions();
        createDeviceFunctionsCheckboxes(); // Create checkboxes when device make changes
    });

    // Function to display filtered results
    function displayFilteredResults(results) {
        const filterResultsDiv = document.getElementById('filterResults');
        filterResultsDiv.innerHTML = ''; // Clear existing results

        if (results.length > 0) {
            results.forEach(result => {
                const listItem = document.createElement('div');
                listItem.textContent = result;
                filterResultsDiv.appendChild(listItem);
            });
            filterResultsDiv.style.display = 'block'; // Show the results div
        } else {
            filterResultsDiv.style.display = 'none'; // Hide the results div if no results
        }
    }



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

            const cellDeviceType = row.insertCell(1);
            cellDeviceType.textContent = ticketData.deviceType;

            const cellDeviceMake = row.insertCell(2);
            cellDeviceMake.textContent = ticketData.deviceMake;

            const cellDeviceModel = row.insertCell(3);
            cellDeviceModel.textContent = ticketData.deviceModel;

            const cellIssueDescription = row.insertCell(4);
            cellIssueDescription.textContent = ticketData.issueDescription;

            // Add more cells for other ticket data you want to display in the table
        }
    }
}

// Call the function to display tickets in the table when the page loads
displayTicketsInTable();

}
);







  // define the callAPI function that takes input fields as parameters
  var callAPI = () => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    // get input values
    var firstName = document.getElementById('fName').value;
    var lastName = document.getElementById('lName').value;
    var ticketName = document.getElementById('ticket_name').value;
    var deviceMake = document.getElementById('deviceMake').value;
    var deviceModel = document.getElementById('deviceModel').value;
    var customerId = document.getElementById('customerId').value;
    var technicianId = document.getElementById('technicianId').value;
    var deviceType = document.getElementById('deviceType').value;
    var issueDescription = document.getElementById('issueDescription').value;
    var imeiSerial = document.getElementById('imeiSerial').value;
    var passcode = document.getElementById('passcode').value;
    var expectedCompletion = document.getElementById('expectedCompletion').value;
    var contactInfo = document.getElementById('contactInfo').value;
    var phoneCarrier = document.getElementById('phoneCarrier').value;

    // Get content from deviceFunctionsContainer if it's a div container
    var deviceFunctionsContainer = document.getElementById('deviceFunctionsContainer').innerHTML;

    // using built-in JSON utility package, turn object to string and store in a variable
    var raw = JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "ticket_name": ticketName,
        "deviceMake": deviceMake,
        "deviceModel": deviceModel,
        "customerId": customerId,
        "technicianId": technicianId,
        "deviceType": deviceType,
        "issueDescription": issueDescription,
        "imeiSerial": imeiSerial,
        "passcode": passcode,
        "expectedCompletion": expectedCompletion,
        "contactInfo": contactInfo,
        "phoneCarrier": phoneCarrier,
        "deviceFunctionsContainer": deviceFunctionsContainer
    });

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
    fetch("https://5ji1fvxlsl.execute-api.us-east-2.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => {
            // update HTML content with the API response
            document.getElementById('output').innerHTML = "Hello, " + JSON.parse(result).body;
        })
        .catch(error => console.log('error', error));
}
