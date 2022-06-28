const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "timokha",
  password: "Soveromtimokha3000",
  database: "productiveDB"
});

con.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected to mysql database');
  }
});

let sess;

module.exports = con;