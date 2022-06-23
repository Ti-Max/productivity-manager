const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: ""
});

con.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
});

let sess;

module.exports = con;