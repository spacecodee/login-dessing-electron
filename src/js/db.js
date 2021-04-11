const mysql = require('promise-mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RONNYharol07',
    database: 'chatapp'
});

function getConnection() {
    return connection;
}

module.exports = {getConnection};
