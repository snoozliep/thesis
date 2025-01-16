// //Scrroll
//
// document.querySelectorAll('nav a').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//
//       const target = document.querySelector(this.getAttribute('href'));
//       target.scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });

// user.js
import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('public', {
    maxAge: '1d', // Cache static files for 1 day
    etag: false // Disable etag headers
})); // Serve static files from 'public' directory

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Logmein123.',
    database: 'first_aid_kit_iot'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

app.post('/register', (req, res) => {
    const { name, student_id, program, age, id_card } = req.body;

    const query = 'INSERT INTO users (name, student_id, program, age, id_card) VALUES (?, ?, ?, ?, ?)';
    connection.execute(query, [name, student_id, program, age, id_card], (err) => {
        if (err) {
            return res.status(500).send('Error registering user');
        }
        res.status(201).send('User registered successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
