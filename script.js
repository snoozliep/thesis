// Fetch sensor data from the backend
function fetchSensorData() {
    fetch('/api/sensor-data')
      .then(response => response.json())
      .then(data => {
        // Update the UI with the sensor data
        updateSensorDataDisplay(data);
      })
      .catch(error => {
        console.error('Error fetching sensor data:', error);
      });
    }
    
    // Handle user registration
    function registerUser(idCard) {
    fetch('/api/user-registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idCard })
    })
      .then(response => response.json())
      .then(userData => {
        // Update the UI with the user's information
        displayUserInfo(userData);
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
    }
    
    // Example usage
    fetchSensorData();
    
    // Example user registration
    registerUser('1234567890');

