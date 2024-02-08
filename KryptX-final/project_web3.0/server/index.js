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
var jwt = require('jsonwebtoken');


app.use(cors({
  credentials : true,
  origin : ["http://localhost:3000"]
}))
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
    console.log("db" , result[0]);
      bcrypt.compare(password, result[0]?.password, function(err, isMatch){
      if (isMatch) {
        jwt.sign({id : result[0]?.id , username}, "secretkey",{},(error,token)=>{
          console.log("my Token " , token);
          if (error){
            throw error;
          }
          else{
            res.cookie("token", token, {sameSite:'none', secure:true, httpOnly:true}).json({success : true ,token:token}) ;
          }
        })
        console.log("Login successful");
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
app.get("/profile", (req,res)=>{
    const token = req.headers.authorization;
    const decodedToken = jwt.decode(token);
    

    const {id , username} = decodedToken
    const sql = 'SELECT id,username FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
       if(err){
          throw err;
       }
       else{
         res.json(result)
       }
    })
})
app.listen(5000, () => {
  console.log('Server listening on port 5000');
 });