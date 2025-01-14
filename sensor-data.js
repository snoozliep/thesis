    // Fetch sensor data from the backend
    function fetchSensorData() {
        fetch('/api/sensor-data')
          .then(response => response.json())
          .then(data => {
            // Update the UI with the sensor data
            document.getElementById('heartbeat-value').textContent = data.heartbeat;
            document.getElementById('temperature-value').textContent = data.temperature;
            document.getElementById('pressure-value').textContent = data.pressure;
            document.getElementById('humidity-value').textContent = data.humidity;
            document.getElementById('thermal-value').textContent = data.thermal;
            document.getElementById('motion-value').textContent = data.motion;
          })
          .catch(error => {
            console.error('Error fetching sensor data:', error);
          });
        }
        
        // Example usage
        fetchSensorData();