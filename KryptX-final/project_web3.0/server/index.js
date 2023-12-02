const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cors = require('cors');
const app = express();
const crypto = require("crypto");
app.use(bodyParser.json());
const bcrypt = require("bcrypt")
const saltRounds = 10

app.use(cors())
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Expelliarmus@7',
  database: 'login'
 });
db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
 });
//REGISTERATION
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, saltRounds, function(err, hash) {
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, hash], (err, result) => {
    if (err) {
      console.error(err);
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
 });
  });
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], (err, result) => {
      bcrypt.compare(password, result[0].password, function(err, isMatch){
      if (isMatch) {
        console.log("Login successful");
        res.json({ success: true });
      }
      else if (err){
        console.error(err);
        res.json({ success: false });
      } 
      else{
        res.json({ success: false });
      }
    
    });
      })  
});
app.listen(5000, () => {
  console.log('Server listening on port 5000');
 });