const mysql = require('mysql');

const dbConnectionConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"school"
};

const con = mysql.createConnection(dbConnectionConfig);

con.connect((error) => {
    if(error){
        console.log('Connection Failed');
    }
    else{
        console.log('Connection Success');
    }
});