const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

// Question 1 : Shouting a name in UpperCase
app.get('/shout', (req, res) => {
  let name = req.query.name;
  let uppercaseName = name.toUpperCase(); // Turns String into Uppercase
  res.send(uppercaseName);
});
// Question 2 : Concatenating First and last name to return fullname
app.get('/fullname', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let ConcatenatedName = firstName +' ' + lastName;
  res.send(ConcatenatedName);
});
// Question 3 : Concatenating month and year to return formatted Date
app.get('/date', (req,res) =>{
  let month = req.query.month;
  let year = req.query.year;
  let ConcatenatedDate = month+' , '+year;
  res.send(ConcatenatedDate);
});

// Question 4 : Return a greet with the given name
app.get('/greet', (req,res) =>{
  let name = req.query.name;
  let greetings = 'Namaste, '+name+" !";
  res.send(greetings);
});

// Question 5  : Return a formatted address
app.get('/address', (req,res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let FormattedAddress = street+', '+city+', '+state;
  res.send(FormattedAddress);
});

// Question 6 : Return a Formatted Email
app.get('/email',(req,res) =>{
  let username = req.query.username;
  let domain = req.query.domain;
  let FormattedEmail = username + '@' + domain;
  res.send(FormattedEmail);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
