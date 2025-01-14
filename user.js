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


const express = require('express');
const app = express();

// Middleware to parse form data
app.use(express.urlendoded({ extended: true }));

// API endpoint to register a user
app.post('/api/register-user', (req, res) => {
// Get the form data from the request body
const { name, studentId, program, age, idCard } = req.body;

// Validate the data (e.g., check for duplicates, format, etc.)
// ...

// Store the user data in the database
// ...

// Return the registered user data
res.json({
  name,
  studentId,
  program,
  age
});
});

// API endpoint to fetch a user
app.get('/api/get-user', (req, res) => {
// Fetch the user data from the database based on the ID card
const userData = {
  name: 'John Doe',
  studentId: '12345',
  program: 'Computer Science',
  age: 20
};

// Return the user data
res.json(userData);
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
```

2. Update the `user.js` file to fetch the user data after successful registration:
