const fs = require('fs');
const path = require('path');

let logPath = path.join(__dirname, '../logs/userLogs.txt')

function userLogs (req,res,next) {
    fs.appendFileSync(logPath ,'O usuário acessou a rota: ' + req.url +'\n')
    next();
}

module.exports = userLogs;