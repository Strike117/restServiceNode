var express = require('express');

var app = express();
app.configure(function() {
    app.use(express.bodyParser());
    app.use(app.router);
});

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.get('/empleados', function(req, res) {
	var empleados = [];
	empleados.push({
		name:'jonathan',
		age: 27
	});
    res.send(empleados);
});
app.post('/test', function(req, res) {
    res.send(req.body);
});

app.listen(3000);
