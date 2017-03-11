let express = require('express')
    ,http = require('http')
    ,bodyParser = require('body-parser')
    ,multer = require('multer')
    ,mysql = require('mysql')
    ,validator = require('express-validator')
    ,routes = require('./routes/routes')
    ,res_error = require('res-error')
    ,app = express();
let dbconnection = mysql.createConnection({
  host: "172.30.236.250",
  user: "root",
  password: "",
  database : 'DesaliaDb'
});

app.set('dbconnection', dbconnection);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use('/', routes);
app.use(res_error);

let server = app.listen(8081,() => {
   let host = server.address().address
   let port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
