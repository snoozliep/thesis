//Scrroll

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// user.js
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Get the form element
const form = document.getElementById('user-registration-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const name = document.getElementById('name').value;
  const studentId = document.getElementById('student-id').value;
  const program = document.getElementById('program').value;
  const age = document.getElementById('age').value;
  const idCard = document.getElementById('id-card').value;

  // Insert the data into the database
  connection.query(
    'INSERT INTO users (name, student_id, program, age, id_card) VALUES (?, ?, ?, ?, ?)',
    [name, studentId, program, age, idCard],
    (error, results, fields) => {
      if (error) throw error;
      console.log('User registered successfully!');
    }
  );
});
