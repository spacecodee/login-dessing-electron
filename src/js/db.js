const mysql = require('promise-mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'scodee',
    password: 'spacecodee',
    database: 'chatapp'
});

function getConnection() {
    return connection;
}

module.exports = {getConnection};
